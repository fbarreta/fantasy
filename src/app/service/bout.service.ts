import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Fighter } from '../model/fighter';
import { Bout } from '../model/bout';

@Injectable()
export class BoutService{

    private apiUrl: string = 'app/bouts';

    constructor(
        private http: Http
    ){}

    getBouts(): Promise<Bout[]>{
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Bout[]);
    }
}