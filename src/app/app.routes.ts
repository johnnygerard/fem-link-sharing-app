import { Component } from '@angular/core';
import { Routes } from '@angular/router';

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

  // Guarded routes
  // AuthGuard redirects to 'login' if the user is logged out. Otherwise, it allows the user to
  // access the requested route.
  {
    path: 'links',
    component: DummyComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile-details',
    component: DummyComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'preview',
    component: DummyComponent,
    // canActivate: [AuthGuard],
    data: { isPreview: true }
  },

  { path: '**', redirectTo: 'links' }
];
