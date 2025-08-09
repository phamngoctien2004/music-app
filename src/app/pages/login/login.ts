import { Component } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [PasswordModule, InputText],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css'
})
export class Login {

}
