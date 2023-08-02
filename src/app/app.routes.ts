import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { NewAccountPageComponent } from './form-pages/new-account-page/new-account-page.component';
import { LoginPageComponent } from './form-pages/login-page/login-page.component';

@Component({
  selector: 'app-dummy',
  standalone: true,
  template: '<p>dummy works!</p>'
})
// Temporary placeholder component
class DummyComponent { }

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'new-account', component: NewAccountPageComponent },
  { path: 'user/:id', component: DummyComponent, data: { isPreview: false } },

  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'links',
        component: DummyComponent,
      },
      {
        path: 'profile-details',
        component: DummyComponent,
      },
      {
        path: 'preview',
        component: DummyComponent,
        data: { isPreview: true }
      },
    ]
  },

  { path: '**', redirectTo: 'links' }
];
