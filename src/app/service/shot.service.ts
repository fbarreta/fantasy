import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shot } from '../model/shot';

@Injectable()
export class ShotService {

    private apiUrl = 'app/shots';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ) {}
}
