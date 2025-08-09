import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Menu} from '../../components/menu/menu';
import {Sidebar} from '../../components/sidebar/sidebar';
import {Play} from '../../components/play/play';
import {Content} from '../../components/content/content';
import {NgClass} from '@angular/common';
import {SongDetail} from '../song-detail/song-detail';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Menu, Sidebar, Play, Content, NgClass, SongDetail],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {
  isClose: boolean = false;
  handleSidebarToggle($event: boolean){
    this.isClose = $event;
  }
}
