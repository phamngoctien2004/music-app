import {Component, ElementRef, Input, input, output, ViewChild} from '@angular/core';
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
  @ViewChild('rangeE') rangeElementRef!: ElementRef<HTMLInputElement>;
  @ViewChild('volumeE') volumeElementRef!: ElementRef<HTMLInputElement>;
  ngAfterViewInit() {
    this.rangeElementRef.nativeElement.style.setProperty("--progress", `0%`);
    this.volumeElementRef.nativeElement.style.setProperty("--progress", `100%`);
  }

  isPlaylistDialogVisible: boolean = false;

  openPlaylistDialog(){
    this.isPlaylistDialogVisible = true;
  }

// Audio properties
  duration = input<number>(0);
  isPlaying = input<boolean>(false);
  isMuted = input<boolean>(false);

  currentTime = input<number>(0);
  progress = input<number>(0);
  volume = input<number>(1);
// emit
  toggleRequested = output<void>();
  seekRequested = output<number>();
  volumeRequested = output<number>();
  toggleMuteRequested = output<void>();
  onSeek($event: any){
    this.seekRequested.emit($event.target.value);
  }
  onVolume(){
    const value = this.volumeElementRef.nativeElement.value;
    this.volumeRequested.emit(Number.parseFloat(value));
  }
  onToggle() {
    this.toggleRequested.emit();
  }
  onMute(){
    this.toggleMuteRequested.emit();
  }
  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
}
