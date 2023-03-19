class Note {
  constructor(pitch) {
    this.pitch = pitch;
    this.oscillator = null;
    this.isPlaying = false;
  }

  start() {
    if (!this.isPlaying) {
      // create audio context
      const audioContext = new AudioContext();

      // create oscillator
      this.oscillator = audioContext.createOscillator();
      this.oscillator.type = 'sine';
      this.oscillator.frequency.setValueAtTime(this.pitch, audioContext.currentTime);

      // connect oscillator to audio context output
      this.oscillator.connect(audioContext.destination);

      // start oscillator
      this.oscillator.start();

      // mark note as playing
      this.isPlaying = true;
    }
  }

  stop() {
    if (this.isPlaying) {
      // stop oscillator
      this.oscillator.stop();
      this.oscillator.disconnect();

      // mark note as not playing
      this.isPlaying = false;
    }
  }
}
