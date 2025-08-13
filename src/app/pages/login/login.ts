import { Component } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputText, InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AuthRequest} from '../../core/dtos/request/AuthRequest';
import {AuthService} from '../../core/services/AuthService';
import {Toast, ToastModule} from 'primeng/toast';
import {Message} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {UserService} from '../../core/services/UserService';

@Component({
  selector: 'app-login',
  imports: [PasswordModule, InputTextModule, FormsModule, RouterLink, ToastModule, Message],
  providers: [MessageService],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css',
})
export class Login {
  request: AuthRequest = {
    email: '',
    password: '',
    providerType: 'username_password'
  };
  isLoginFailed: boolean = false;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
  ) {

  }
  async ngOnInit(){
    const code = this.activatedRoute.snapshot.queryParams['code'];
    if(code){
      this.request.code = code;
      this.authService.loginGoogle(code).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', summary: 'Login Successful', detail: 'You have logged in successfully!'});
          this.userService.setState(response.userResponse);
          localStorage.setItem("keokera", response.accessToken);
          this.router.navigate(['/']); // Navigate to the home page on successful login
        },
        error: (error) => {
          console.error('Login failed:', error);
          // Handle login error, e.g., show an error message
          this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password.'});
        }
      })
    }
  }
  async onSubmit(){
    this.authService.login(this.request).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.messageService.add({severity: 'success', summary: 'Login Successful', detail: 'You have logged in successfully!'});
        this.userService.setState(response.userResponse);
        localStorage.setItem("keokera", response.accessToken);
        this.router.navigate(['/']); // Navigate to the home page on successful login
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message
        this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password.'});
      }
    })
  }
  async redirectGoogleLogin(){
    this.authService.getGoogleLoginUrl().subscribe({
      next: (url) => {
        window.location.href = url;
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message
        this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password.'});
      }
    })
  }
}
