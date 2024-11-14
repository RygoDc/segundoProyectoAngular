import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  servicio: BehaviorSubject<string> = new BehaviorSubject<string>("");
  detalles$: Observable<string> = this.servicio.asObservable();

  constructor(

  ) { }

  setItem(name : string){
    this.servicio.next(name);
  }
}
