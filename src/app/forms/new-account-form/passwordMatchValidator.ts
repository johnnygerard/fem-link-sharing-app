import { ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = control => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  if (password?.value === passwordConfirm?.value)
    return null;
  return { passwordMismatch: true };
}
