import {Component, inject, signal} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Menu} from '../../components/menu/menu';
import {Sidebar} from '../../components/sidebar/sidebar';
import {Play} from '../../components/play/play';
import {Content} from '../../components/content/content';
import {NgClass} from '@angular/common';
import {SongDetail} from '../song-detail/song-detail';
import {PlayerStore} from '../../core/stores/PlayerStore';
import {UserService} from '../../core/services/UserService';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Menu, Sidebar, Play, Content, NgClass, SongDetail],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {
  isClose: boolean = false;

  constructor(protected playerStore: PlayerStore,private userService: UserService) {
  }
  async ngOnInit() {
    await this.playerStore.loadAndPlay(this.trackUrl[0].url);
  }
  trackUrl = [
    {url: 'assets/mp3/chungtakhongthuocvenhau.mp3'}
  ];
  handleSidebarToggle($event: boolean){
    this.isClose = $event;
  }
  handleToggle() {
    this.playerStore.toggle();
    console.log("play")
  }

  async playTrack(url: string){
    await this.playerStore.loadAndPlay(url);
  }
  handleSeek(second: number){
    this.playerStore.seek(second);
  }
  handleVolume(value: number){
    this.playerStore.setVolume(value);
  }
  handleMute(){
    this.playerStore.muteToggle();
  }
}
