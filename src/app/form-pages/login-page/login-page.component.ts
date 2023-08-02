import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/logo/logo.component';
import { LoginFormComponent } from 'src/app/forms/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, LogoComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['../form-page.component.scss']
})
export class LoginPageComponent {

}
