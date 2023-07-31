# Blueprint
This file describes the structure of the Angular application.

## Routing configuration

```typescript
// app.route.ts
export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'new-account', component: NewAccountPageComponent },
  { path: 'user/:id', component: UserPageComponent, data: { isPreview: false } },

  // Guarded routes
  // AuthGuard redirects to 'login' if the user is logged out. Otherwise, it allows the user to
  // access the requested route.
  { path: 'links', component: LinkEditorPageComponent, canActivate: [AuthGuard] },
  { path: 'profile-details', component: ProfileEditorPageComponent, canActivate: [AuthGuard] },
  {
    path: 'preview',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    data: { isPreview: true }
  },

  { path: '**', redirectTo: 'links' }
];
```
