import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/logo/logo.component';
import { NewAccountFormComponent } from 'src/app/forms/new-account-form/new-account-form.component';

@Component({
  selector: 'app-new-account-page',
  standalone: true,
  imports: [CommonModule, LogoComponent, NewAccountFormComponent],
  templateUrl: './new-account-page.component.html',
  styleUrls: ['../form-page.component.scss']
})
export class NewAccountPageComponent {

}
