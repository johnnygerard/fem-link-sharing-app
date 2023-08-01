import { Injectable } from '@angular/core';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  #id = 0;
  #users: User[] = [];
  isLoggedIn = false;
  currentUser?: User;

  // Add a new user if the email is not already in use.
  addUser(email: string, password: string): void {
    if (!this.#users.some(user => user.email === email))
      this.#users.push(new User(this.#id++, email, password));
  }

  // Log in a user if the email/password combination is valid.
  authenticateUser(email: string, password: string): boolean {
    const user = this.#users.find(user => user.email === email);
    if (user && user.password === password) {
      this.isLoggedIn = true;
      this.currentUser = user;
      return true;
    }
    return false;
  }
}
