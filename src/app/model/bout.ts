import { Fighter } from './fighter';
import { Event } from './event';

export class Bout{
    constructor(
        public id : number,
        public fighter1 : Fighter,
        public fighter2 : Fighter,
        public rounds : number,
        public event: Event
    ){}
}