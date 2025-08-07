import {Component, Input, input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-play-item',
  imports: [
    NgStyle
  ],
  templateUrl: './play-item.html',
  standalone: true,
  styleUrl: './play-item.css'
})
export class PlayItem {

  @Input() isClose: boolean = false;

}
