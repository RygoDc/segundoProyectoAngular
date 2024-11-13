import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  mostrarPokemon: BehaviorSubject<string> = new BehaviorSubject<string>(""); 
  detail$: Observable<string> = this.mostrarPokemon.asObservable();

  constructor(

  ) { }

  obtenerDetalle(name : string){
    this.mostrarPokemon.next(name);
  }
}
