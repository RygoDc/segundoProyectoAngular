import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  mostrarModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modal$: Observable<boolean> = this.mostrarModal.asObservable();

  constructor() { }
  
  toggleModal(mostrar:boolean) {
    this.mostrarModal.next(mostrar);
  }
}
