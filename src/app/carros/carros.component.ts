import { Component, OnInit } from '@angular/core';
import { CarroService } from "../services/carro.service";
import { Carro } from "../model/carro";

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros : Carro[] = [];

  constructor(private CarroService : CarroService) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.CarroService.getCarros()
    .subscribe(response => {
      this.carros = response;
      //console.log(response);
    });
        
  }

}
