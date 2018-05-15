import { Component, OnInit } from '@angular/core';
import { LivroService } from "../services/livro.service";
import { Livro } from "../model/livro";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros : Livro[] = []; // <- Minha lista vazia

  // injetar o LivroService para pegar os dados do servidor
  constructor(private LivroService : LivroService) { }


  ngOnInit() {
    this.lista(); // <- Faz a chamada
  }

  lista(){
    this.LivroService.getlivros()
      .subscribe(response => {
        this.livros = response;
        // <- console.log(response); Verificar se está pegando os dados do servidor.
      })
  }
}
