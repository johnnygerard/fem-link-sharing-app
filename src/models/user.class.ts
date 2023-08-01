import { Link } from "./link.class";

export class User {
  links: Link[] = [];
  firstName = '';
  lastName = '';
  avatar?: File;
  publicEmail?: string;

  constructor(
    public id: number,
    public email: string,
    // Because there is no backend and to keep things simple,
    // the password is stored in plain text.
    public password: string,
  ) { }
}
