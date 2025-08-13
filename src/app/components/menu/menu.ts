import {Component, Signal, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {RouterLink} from '@angular/router';
import {UserService} from '../../core/services/UserService';
import {UserResponse} from '../../core/dtos/response/UserResponse';

@Component({
  selector: 'app-menu',
  imports: [
    Button,
    NgStyle,
    MenuModule,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './menu.html',
  standalone: true,
  styleUrl: './menu.css'
})
export class Menu {
  userState: Signal<UserResponse | null>;
  items: MenuItem[] = [];

  constructor(private userService: UserService) {
    this.userState = this.userService.userState;
    console.log(this.userState()?.avatar)
  }
  ngOnInit(){
    this.items = [
      {
        label: 'Account',
      },
      {
        label: 'Profile',
      },
      {
        label: 'Logout',
      }
    ];
  }
}
