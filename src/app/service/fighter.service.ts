import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Fighter } from '../model/fighter';

@Injectable()
export class FighterService {

    private apiUrl = 'app/fighters';

    constructor(
        private http: Http
    ) {}

    getFighters(): Promise<Fighter[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Fighter[]);
    }
}
