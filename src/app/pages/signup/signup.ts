import {Component, input, model, signal} from '@angular/core';
import {StepperModule} from 'primeng/stepper';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {Password} from 'primeng/password';
import {RouterLink} from '@angular/router';
import {InputMask} from 'primeng/inputmask';

@Component({
  selector: 'app-signup',
  imports: [
    StepperModule,
    FormsModule,
    InputText,
    ButtonModule,
    Password,
    RouterLink,
    InputMask
  ],
  templateUrl: './signup.html',
  standalone: true,
  styleUrl: './signup.css'
})
export class Signup {
  activeStep = model<number>(1);


  emailStep = model<number>(1)
  passwordStep=  model<number>(2)
  doneStep =  model<number>(3)

  // validate
  passwordPattern = input<string>('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$');
  password = '';
  email: string = '';
  birth: String ='';
  gender: String = '';
  name: String = '';
  signup(){
    console.log("sign")
  }
}
