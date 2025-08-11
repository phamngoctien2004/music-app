import {Component, input, output} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-song-header',
  imports: [
    NgStyle
  ],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.css'
})
export class Header {
  // backgroundColor = 'linear-gradient( #5E1D19FF ,#A86058FF)'

  backgroundColor = 'linear-gradient( #183848FF ,#284858FF);';

  isPlaying = input<boolean>(false);
  toggleRequested = output<void>();
}
