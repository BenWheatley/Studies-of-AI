import sys
import struct

# Define MIDI message types
NOTE_ON = 0x90
NOTE_OFF = 0x80

# Define utility functions
def get_time(msb, lsb):
    """Convert two bytes representing time to an integer"""
    return (msb << 8) + lsb

def get_pitch(note):
    """Convert MIDI note number to scientific pitch notation"""
    pitches = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    octave = (note // 12) - 1
    pitch = pitches[note % 12]
    return pitch + str(octave)

# Check for command line argument
if len(sys.argv) < 2:
    print("Usage: midi_to_json.py <filename>")
    sys.exit()

# Read MIDI file
filename = sys.argv[1]
with open(filename, "rb") as f:
    # Read header chunk
    header = f.read(14)
    header_fmt = ">4sLHHH"
    _, _, _, _, _, format_type = struct.unpack(header_fmt, header)
    if format_type != 1:
        print("Unsupported MIDI format type:", format_type)
        sys.exit()
    _, num_tracks, ticks_per_beat = struct.unpack(header_fmt, header)

    # Read track chunks
    tracks = []
    for i in range(num_tracks):
        track_header = f.read(8)
        track_header_fmt = ">4sL"
        _, track_size = struct.unpack(track_header_fmt, track_header)
        track_data = f.read(track_size)
        tracks.append(track_data)

# Parse MIDI events and convert to JSON
events = []
for track_data in tracks:
    pos = 0
    time = 0
    note_on = {}
    while pos < len(track_data):
        delta_time = 0
        while True:
            byte = track_data[pos]
            delta_time = (delta_time << 7) + (byte & 0x7f)
            pos += 1
            if byte < 0x80:
                break
        time += delta_time

        byte = track_data[pos]
        pos += 1
        if byte == NOTE_ON:
            note, velocity = struct.unpack(">BB", track_data[pos:pos+2])
            pos += 2
            if velocity > 0:
                note_on[note] = time
            else:
                pitch = get_pitch(note)
                start_time = note_on[note]
                duration = time - start_time
                events.append({"pitch": pitch, "startTime": start_time, "duration": duration, "velocity": velocity})
                del note_on[note]
        elif byte == NOTE_OFF:
            note, velocity = struct.unpack(">BB", track_data[pos:pos+2])
            pos += 2
            pitch = get_pitch(note)
            start_time = note_on[note]
            duration = time - start_time
            events.append({"pitch": pitch, "startTime": start_time, "duration": duration, "velocity": velocity})
            del note_on[note]

# Output JSON data to STDOUT
import json
print(json.dumps(events))
