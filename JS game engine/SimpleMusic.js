class Note {
  constructor(note) {
    this.note = note;
    this.frequency = this.getFrequencyFromNote();
    this.oscillator = null;
  }

  getFrequencyFromNote() {
    const pitchRegex = /^([A-Ga-g])(#|♯|b|♭)?(\d+)$/;
    const match = pitchRegex.exec(this.note);
    if (!match) {
      throw new Error(`Invalid note: ${this.note}`);
    }
    const noteLetter = match[1].toUpperCase();
    const accidental = match[2];
    const octave = parseInt(match[3], 10);

    const noteIndex = Note.noteLetters.indexOf(noteLetter);
    if (noteIndex === -1) {
      throw new Error(`Invalid note: ${this.note}`);
    }

    let frequency = Note.baseFrequency * Math.pow(2, (noteIndex - 9) / 12 + (octave - 4));

    if (accidental) {
      if (accidental === '#' || accidental === '♯') {
        frequency *= Math.pow(2, 1 / 12);
      } else if (accidental === 'b' || accidental === '♭') {
        frequency /= Math.pow(2, 1 / 12);
      } else {
        throw new Error(`Invalid note: ${this.note}`);
      }
    }

    return frequency;
  }

  start() {
    this.oscillator = new OscillatorNode(audioCtx, { type: 'sine', frequency: this.frequency });
    this.oscillator.connect(audioCtx.destination);
    this.oscillator.start();
  }

  stop() {
    this.oscillator.stop();
    this.oscillator.disconnect();
    this.oscillator = null;
  }
}

Note.baseFrequency = 440;
Note.noteLetters = 'C C# D D# E F F# G G# A A# B'.split(' ');
