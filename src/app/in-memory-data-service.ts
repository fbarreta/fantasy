import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fighter } from './model/fighter';
import { Bout } from './model/bout';

export class InMemoryDataService implements InMemoryDbService {

    createDb():{}{
        let bouts: Bout[] = [
            {id: 1, 
                fighter1:{id: 1, name: "Ben Rothwell", photo: "Ben-Rothwell.png"},
                fighter2:{id: 2, name: "Josh Barnett", photo: "Josh-Barnett.png"},
                rounds: 3,
                event: {id:1, name: "UFC 123", date:"Today"}
            },
            {id: 2, 
                fighter1:{id: 3, name: "Anthony Johnson", photo: "Anthony-Johnson.png"},
                fighter2:{id: 4, name: "Ryan Bader", photo: "Ryan-Bader.png"},
                rounds: 3,
                event: {id:1, name: "UFC 123", date:"Today"}
            }
        ];

        return {bouts};
    }

}