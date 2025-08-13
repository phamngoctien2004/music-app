import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './pages/home/home';
import {UserService} from './core/services/UserService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('music-app');

  constructor(private userService: UserService) {
    // Initialize user service to load user data

  }
  ngOnInit() {
    this.userService.loadUser();
  }
}
