import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Livro } from "../model/livro";


@Injectable()
export class LivroService {

    constructor(private http: HttpClient) { }

    getlivros(): Observable<Livro[]> {
        return this.http.get<Livro[]>
            (`https://f47f97d6-3ecc-4f1f-bddd-d102653a8665.mock.pstmn.io/livros`);
    }

    insert(obj : Livro){
        return this.http.post(
            `https://f47f97d6-3ecc-4f1f-bddd-d102653a8665.mock.pstmn.io/livros`,
            obj,
            {
                observe:'response',
                responseType: 'text'
            }
        );
    }
}