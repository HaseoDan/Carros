import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CarroService } from "../services/carro.service";

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private carroServ: CarroService) { 

    this.formCarro();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.carroServ.insert(this.formGroup.value)
    .subscribe(response => {
      alert("Cadastro realizado com sucesso")
      this.formCarro();
    }, error => {
      alert("Erro ao cadastrar!")    
    })
  }

  formCarro(){
    this.formGroup = this.formBuilder.group({
      modelo: ['',[Validators.required]],
      marca: ['',[Validators.required]],
      ano: ['',[Validators.required]],
      preco: ['',[Validators.required]],
    })
  }
}


