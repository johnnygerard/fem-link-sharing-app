import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

@Component({
  selector: 'app-dummy',
  standalone: true,
  template: '<p>dummy works!</p>'
})
// Temporary placeholder component
class DummyComponent { }

export const routes: Routes = [
  { path: 'login', component: DummyComponent },
  { path: 'new-account', component: DummyComponent },
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
