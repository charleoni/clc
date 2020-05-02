export class Login {
    constructor(
        public username: string,
        public password: string,
    ) {}

    isValid() {
        return (this.username && this.password);
    }
}