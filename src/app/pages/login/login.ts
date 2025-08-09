import { Component } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [PasswordModule, InputText, FormsModule, RouterLink],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css'
})
export class Login {
  email: String = '';

  onSubmit(){
    console.log('ok')
  }
}
