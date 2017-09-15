import { Fighter } from './fighter';
import { Bout } from './bout';

export class Shot {
    constructor(
        public id: number,
        public bout: Bout,
        public winner: Fighter,
        public wayOfVictory: string,
        public round: number
    ) {}
}
