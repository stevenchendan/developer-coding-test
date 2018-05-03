export class User {
  id: number;
  name: string;

  constructor(d) {
      this.id = d.id;
      this.name = d.fullname;
  }
}
