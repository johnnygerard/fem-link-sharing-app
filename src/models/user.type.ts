import { Link } from "./link.class";

export type User = {
  id: number;
  avatar?: File;
  firstName: string;
  lastName: string;
  email?: string;
  links: Link[];
}
