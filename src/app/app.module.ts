import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LivroService } from "./services/livro.service";
import { HttpClientModule } from "@angular/common/http";
import { LivrosComponent } from './livros/livros.component';
import { CarrosComponent } from './carros/carros.component';
import { CarroService } from "./services/carro.service";
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    CarrosComponent,
    CadastroLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LivroService, CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
