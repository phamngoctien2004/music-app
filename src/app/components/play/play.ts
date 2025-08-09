import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass} from '@angular/common';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-play',
  imports: [
    NgClass,
    Dialog
  ],
  templateUrl: './play.html',
  standalone: true,
  styleUrl: './play.css'
})
export class Play {
  @ViewChild('audio') audioElementRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('range') rangeElementRef!: ElementRef<HTMLInputElement>;
  @ViewChild('volume') volumeElementRef!: ElementRef<HTMLInputElement>;
  isPlaying: boolean = false;
  progress = 0;
  currentTime = 0;
  duration = 0;

  isMuted: boolean = false;

  isPlaylistDialogVisible: boolean = false;
  // method to play/stop the audio
  togglePlay(){
    const audio = this.audioElementRef.nativeElement;
    if(this.isPlaying){
      audio.pause();
    }else{
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  onLoad(){
    this.duration = this.audioElementRef.nativeElement.duration;
    this.rangeElementRef.nativeElement.style.setProperty("--progress", `0%`);
    this.volumeElementRef.nativeElement.style.setProperty("--progress", `100%`);
  }
  onEnded() {
    this.isPlaying = false;
  }

  onTimeUpdate() {
    const audio = this.audioElementRef.nativeElement;
    this.currentTime = audio.currentTime;
    this.progress = (audio.currentTime / this.duration) * 100;
    this.rangeElementRef.nativeElement.style.setProperty("--progress", `${this.progress}%`);
  }
  seek(event: any) {
    const audio = this.audioElementRef.nativeElement;
    const value = event.target.value;
    audio.currentTime = (value / 100) * this.duration;
  }

  // format time to mm:ss
  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
  // use to format time display
  get displayCurrent(){
    return this.formatTime(this.currentTime);
  }
  get displayDuration(){
    return this.formatTime(this.duration);
  }

// volume change
  volumeChange(){
    const audio = this.audioElementRef.nativeElement;
    const volume = this.volumeElementRef.nativeElement.value;
    audio.volume = Number.parseFloat(volume);
    console.log(`Volume set to: ${audio.volume}`);
    this.volumeElementRef.nativeElement.style.setProperty("--progress", `${audio.volume * 100}%`);
  }

  // mute volume
  toggleMute() {
    this.isMuted = !this.isMuted;

    const audio = this.audioElementRef.nativeElement;

    if (this.isMuted) {
      audio.muted = true;
      this.volumeElementRef.nativeElement.style.setProperty("--progress", `0%`);
    }else{
      audio.muted = false;
      this.volumeElementRef.nativeElement.style.setProperty("--progress", `${audio.volume * 100}%`);
    }
  }

  openPlaylistDialog(){
    this.isPlaylistDialogVisible = true;
  }

  protected readonly innerHeight = innerHeight;
}
