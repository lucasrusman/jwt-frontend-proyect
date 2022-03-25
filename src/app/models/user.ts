export class User {
  readonly email: string;
  readonly pass: string;

  constructor({ email, pass }: { email: string; pass: string }) {
    this.email = email;
    this.pass = pass;
  }
}
