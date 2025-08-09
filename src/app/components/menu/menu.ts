import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {NgStyle} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    Button,
    NgStyle,
    MenuModule,
    RouterLink
  ],
  templateUrl: './menu.html',
  standalone: true,
  styleUrl: './menu.css'
})
export class Menu {
  items: MenuItem[] = [];

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
