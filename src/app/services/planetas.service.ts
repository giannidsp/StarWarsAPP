import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlanetasService {

    public url: string;

    constructor(private _http: HttpClient) {  
        
        this.url = "https://swapi.dev/api/";
    }

    getPlanets(){
        return this._http.get(this.url + "planets/");
    }
}