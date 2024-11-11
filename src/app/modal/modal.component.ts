import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../services/modales/informacion.service';
import { EnviarPokemonService } from '../services/pokemon/enviar-pokemon.service';
import { Pokemon } from '../services/interfaces/pokemon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{

  pokemon: Pokemon | null={
    id:-1,
    nombre: "",
    descripcion: "",
    image_url: ""
  }
  
  constructor(
    private informacionService: InformacionService,
    private enviarPokeminService: EnviarPokemonService
  ) { }

  ngOnInit(){
    this.enviarPokeminService.info$.subscribe(pokemon =>{
      this.pokemon = pokemon
    })
  }    

  cerrarModal(){
    this.informacionService.toggleModal(false);
  }
}
