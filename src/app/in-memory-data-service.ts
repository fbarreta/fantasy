import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fighter } from './model/fighter';
import { Bout } from './model/bout';
import { Event } from './model/event';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {

        const fighters: Fighter[] = [
            {id: 1, name: 'Ben Rothwell', photo: 'Ben-Rothwell.png'},
            {id: 2, name: 'Josh Barnett', photo: 'Josh-Barnett.png'},
            {id: 3, name: 'Anthony Johnson', photo: 'Anthony-Johnson.png'},
            {id: 4, name: 'Ryan Bader', photo: 'Ryan-Bader.png'}
        ];

        const bouts: Bout[] = [
            {id: 1,
                fighter1: {id: 1, name: 'Ben Rothwell', photo: 'Ben-Rothwell.png'},
                fighter2: {id: 2, name: 'Josh Barnett', photo: 'Josh-Barnett.png'},
                rounds: 3
            },
            {id: 2,
                fighter1: {id: 3, name: 'Anthony Johnson', photo: 'Anthony-Johnson.png'},
                fighter2: {id: 4, name: 'Ryan Bader', photo: 'Ryan-Bader.png'},
                rounds: 3
            }
        ];

        return {bouts, fighters};
    }
}
