import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LockIconSvgComponent } from 'src/app/svg/lock-icon-svg.component';
import { MailIconSvgComponent } from 'src/app/svg/mail-icon-svg.component';
import { UserService } from 'src/app/user.service';
import { passwordMatchValidator } from './passwordMatchValidator';

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
  styleUrls: ['../form.component.scss']
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
