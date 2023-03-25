import sys
import struct
import json

def read_midi_file(filename):
    with open(filename, 'rb') as f:
        header = f.read(14)
        assert header[:4] == b'MThd', "Invalid MIDI file header"
        format_type, n_tracks, division = struct.unpack('>HHH', header[8:])
        assert format_type == 1, "Only MIDI format type 1 is supported"
        tracks = []
        for _ in range(n_tracks):
            track_header = f.read(8)
            assert track_header[:4] == b'MTrk', "Invalid MIDI track header"
            track_length = struct.unpack('>I', track_header[4:])[0]
            track_data = f.read(track_length)
            tracks.append(track_data)
    return tracks

def parse_midi_track(track_data):
    notes = []
    time = 0
    for chunk in split_track_into_chunks(track_data):
        delta_time, event_type, event_data = parse_midi_event(chunk)
        time += delta_time
        if event_type == 'NoteOn':
            pitch, velocity = event_data
            notes.append({'pitch': pitch, 'startTime': time, 'duration': None, 'velocity': velocity})
        elif event_type == 'NoteOff':
            pitch, velocity = event_data
            last_note = find_last_note_with_pitch(notes, pitch)
            if last_note:
                last_note['duration'] = time - last_note['startTime']
    return notes

def split_track_into_chunks(track_data):
    i = 0
    while i < len(track_data):
        delta_time, i = read_variable_length_quantity(track_data, i)
        event_type = track_data[i]
        i += 1
        if event_type & 0x80:
            # Event type is specified directly in the status byte
            event_data_length = 0
        else:
            # Event type is implied from the previous event
            event_type = last_event_type
            event_data_length = last_event_data_length
        last_event_type = event_type
        last_event_data_length = event_data_length
        event_data = track_data[i:i+event_data_length]
        print("event_data_length = ", event_data_length)
        i += event_data_length
        yield (delta_time, event_type, event_data)

def parse_midi_event(event_chunk):
    delta_time, event_type_byte, event_data = event_chunk
    event_type = EVENT_TYPES.get(event_type_byte & 0xF0, 'Unknown')
    if event_type == 'NoteOff' and len(event_data) > 1 and event_data[1] == 0:
        # NoteOff with velocity 0 is equivalent to NoteOn with velocity 0
        event_type = 'NoteOn'
    if event_type in ('NoteOn', 'NoteOff'):
        pitch, velocity = event_data[:2] if len(event_data) >= 2 else (0, 0)
        return (delta_time, event_type, (pitch, velocity))
    else:
        return (delta_time, event_type, event_data)

def pitch_to_scientific_notation(pitch):
    octave = pitch // 12 - 1
    note = NOTES[pitch % 12]
    return f'{note}{octave}'

def find_last_note_with_pitch(notes, pitch):
    for note in reversed(notes):
        if note['pitch'] == pitch_to_scientific_notation(pitch):
            return note
    return None

def read_variable_length_quantity(data, i):
    value = 0
    while True:
        byte = data[i]
        i += 1
        value = (value << 7) | (byte & 0x7F)
        if byte & 0x80 == 0:
            return (value, i)

NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

EVENT_TYPES = {
0x80: 'NoteOff',
0x90: 'NoteOn',
0xA0: 'Aftertouch',
0xB0: 'Controller',
0xC0: 'ProgramChange',
0xD0: 'ChannelAftertouch',
0xE0: 'PitchBend'
}

if __name__ == '__main__':
    assert len(sys.argv) == 2, f"Usage: {sys.argv[0]} <midi_filename>"
    filename = sys.argv[1]
    tracks = read_midi_file(filename)
    instruments = []
    for track_data in tracks[1:]:
        notes = parse_midi_track(track_data)
        if notes:
            instruments.append({'instrument': 'Unknown', 'notes': notes})
    print(json.dumps(instruments))
