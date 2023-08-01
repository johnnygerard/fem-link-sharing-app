import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockIconSvgComponent } from '../svg/lock-icon-svg.component';
import { MailIconSvgComponent } from '../svg/mail-icon-svg.component';
import { Router, RouterModule } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { passwordMatchValidator } from './passwordMatchValidator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-account-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LockIconSvgComponent,
    MailIconSvgComponent
  ],
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.scss']
})
export class NewAccountFormComponent {
  form = this.formBuilder.group({
    email: '',
    password: '',
    passwordConfirm: '',
  }, { validators: passwordMatchValidator });

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get passwordConfirm() { return this.form.get('passwordConfirm'); }

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  onSubmit(): void {
    const { email, password } = this.form.value;

    if (!email || !password)
      throw Error('Invalid form state');

    this.userService.addUser(email, password);
    this.router.navigate(['/login']);
  }
}
