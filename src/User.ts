export class User {
    constructor(
        public id: string,
        public login: string,
        public password: string,
        public role: string,
        public age?: string
    ){}
}