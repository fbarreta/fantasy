import { Bout } from './bout';

export class Event {
    constructor(
        public id: number,
        public name: string,
        public date: string,
        public bouts: Bout[]
    ) {}
}
