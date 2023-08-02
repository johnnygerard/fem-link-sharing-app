import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormsModule } from '@angular/forms';
import { LockIconSvgComponent } from 'src/app/svg/lock-icon-svg.component';
import { MailIconSvgComponent } from 'src/app/svg/mail-icon-svg.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LockIconSvgComponent,
    MailIconSvgComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class LoginFormComponent {
  emailValue = '';
  passwordValue = '';
  authError = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  onSubmit(): void {
    const loggedIn = this.userService.authenticateUser(this.emailValue, this.passwordValue);

    if (!loggedIn) {
      this.authError = true;
      return;
    }
    this.router.navigate(['/links']);
  }
}
