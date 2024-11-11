import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class EnviarPokemonService {

  pokemon: BehaviorSubject<Pokemon | null> = new BehaviorSubject<Pokemon | null>(null); 
  info$: Observable<Pokemon | null> = this.pokemon.asObservable();

  constructor() { }

  updatePokemon(info : Pokemon | null) {
    this.pokemon.next(info);
  }
}
