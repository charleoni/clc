export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public username: string,
        public profileId: number,
        public profileName: string,
        public profileCode: string,
        public supervisorId: string,
        public acceptTerms: boolean,
        public lastLogin?: Date,
    ) {}
}