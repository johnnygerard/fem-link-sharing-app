import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-dummy',
  standalone: true,
  template: '<p>dummy works!</p>'
})
class DummyComponent {} // Temporary placeholder component
class DummyGuard {} // Temporary placeholder guard

export const routes: Routes = [
  { path: 'login', component: DummyComponent },
  { path: 'new-account', component: DummyComponent },
  { path: 'user/:id', component: DummyComponent, data: { isPreview: false } },

  // Guarded routes
  // AuthGuard redirects to 'login' if the user is logged out. Otherwise, it allows the user to
  // access the requested route.
  { path: 'links', component: DummyComponent, canActivate: [DummyGuard] },
  { path: 'profile-details', component: DummyComponent, canActivate: [DummyGuard] },
  {
    path: 'preview',
    component: DummyComponent,
    canActivate: [DummyGuard],
    data: { isPreview: true }
  },

  { path: '**', redirectTo: 'links' }
];
