import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Carro } from "../model/carro";

@Injectable()

export class CarroService {

    constructor(private http: HttpClient) { }

    getCarros(): Observable<Carro[]> {
        return this.http.get<Carro[]>
            (`https://6e47ed9c-5cad-488e-8c07-fd78d44afd7f.mock.pstmn.io/carros`);
    }
    
    insert(obj : Carro){
        return this.http.post(
            `https://6e47ed9c-5cad-488e-8c07-fd78d44afd7f.mock.pstmn.io/carros`,
            obj,
            {
                observe:'response',
                responseType: 'text'
            }
        );
    }
}