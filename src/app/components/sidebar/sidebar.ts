import {Component, EventEmitter, Output} from '@angular/core';
import {PlayItem} from '../play-item/play-item';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    PlayItem,
    NgClass,
    NgStyle
  ],
  templateUrl: './sidebar.html',
  standalone: true,
  styleUrl: './sidebar.css'
})
export class Sidebar {
  isClose: boolean = false;
  @Output() isCloseEmitted = new EventEmitter<boolean>();

  emitToggle(){
  }

  toogle(){
    this.isClose = !this.isClose;
    this.isCloseEmitted.emit(this.isClose);
  }
}
