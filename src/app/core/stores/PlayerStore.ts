import {computed, Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PlayerStore {
  private readonly audio = new Audio;
  private readonly _isPlaying = signal(false);
  readonly isPlaying = this._isPlaying.asReadonly();

  private readonly _isMuted = signal(false);
  readonly isMuted = this._isMuted.asReadonly();

  private readonly _src = signal<string | null>(null);
  readonly src = this._src.asReadonly();

  private readonly _currentTime = signal(0);
  readonly currentTime = this._currentTime.asReadonly();

  private readonly _duration = signal(0);
  readonly duration = this._duration.asReadonly();

  private readonly _volume = signal(1);
  readonly volume = this._volume.asReadonly();

  private readonly _progress = signal(0);
  readonly progress = this._progress.asReadonly();
  readonly statusLabel = computed(() => this.isPlaying());

  constructor() {
    this.audio.addEventListener('play', () => this._isPlaying.set(true));
    this.audio.addEventListener('pause', () => this._isPlaying.set(false));
    this.audio.addEventListener('timeupdate', () => {
      this._currentTime.set(this.audio.currentTime);
      this._progress.set((this.audio.currentTime / this._duration()) * 100);
    });
    this.audio.addEventListener('loadedmetadata', () => this._duration.set(this.audio.duration || 0));
    this.audio.addEventListener('ended', () => this._isPlaying.set(false));
  }

  // load url
  async loadAndPlay(url: string) {
    if (this._src() !== url) {
      this._src.set(url);
      this.audio.src = url;
      this.audio.currentTime = 0;
    }
    console.log('okplay')
    await this.play();
  }

  async play() {
    try {
      await this.audio.play();
    } catch (e) {
      console.log(e)
    }
  }
  pause() {
    this.audio.pause();
  }

  // change playback state
  toggle() {
    this.isPlaying() ? this.pause() : this.play();
    console.log(this.volume())
  }

  // mute
  muteToggle(){
    this.audio.muted = !this.isMuted();
    this._isMuted.set(this.audio.muted);
    console.log(`Muted: ${this.isMuted()}`);
  }
  // set specific time
  seek(progress: number) {
    console.log(progress)
    this.audio.currentTime = (progress / 100) * this._duration();
  }

  setVolume(v: number) {
    this.audio.volume = Math.max(0, Math.min(1, v));
    this._volume.set(this.audio.volume);
  }

}
