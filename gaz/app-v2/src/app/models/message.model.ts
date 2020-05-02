export class Message {
    constructor(
        public title: string,
        public description: string,
        public type: string,
        public duration?: number
    ) { }
}
