import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  const email = 'user@example.com';
  const password = 'password';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    service.addUser(email, password);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate a user', () => {
    expect(service.authenticateUser(email, password)).toBeTrue();
  });

  it('should not authenticate a user with an invalid password', () => {
    expect(service.authenticateUser(email, password + 0)).toBeFalse();
  });

  it('should not authenticate a user with an invalid email', () => {
    expect(service.authenticateUser(email + 0, password)).toBeFalse();
  });

  it('should not add a user with an existing email', () => {
    const newPasword = password + 0;
    service.addUser(email, newPasword);

    expect(service.authenticateUser(email, newPasword)).toBeFalse();
  });
});
