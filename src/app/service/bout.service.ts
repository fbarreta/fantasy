import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Fighter } from '../model/fighter';
import { Bout } from '../model/bout';

@Injectable()
export class BoutService {

    private apiUrl = 'app/bouts';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ) {}

    getBouts(): Promise<Bout[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Bout[]);
    }

    create(bout: Bout): Promise<Bout> {
        return this.http
        .post(this.apiUrl, JSON.stringify(bout), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json().data as Bout);
    }

    delete(bout: Bout): Promise<Bout> {
        const url = `${this.apiUrl}/${bout.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => bout as Bout);
    }
}
