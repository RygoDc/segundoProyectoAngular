import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from '../services/pokemon/pokemon-detail.service';
import {DetailService} from '../services/pokemon/detail.service';
import {Detalles} from '../services/interfaces/detalles';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string = '';
  pokemon: Detalles | null = null;

  constructor(
    private pokemonDetailService:PokemonDetailService,
    private detailService: DetailService
  ) { }

  ngOnInit(){
    this.pokemonDetailService.detalles$.subscribe(detalles =>{
      this.pokemonName = detalles;
    })
    this.detailService.getPokemon(this.pokemonName).subscribe({
      next: datos => {
        console.log(datos);

        this.pokemon = {
          imagen: datos.sprites.front_default,
          abilities:[]
        }
        if(datos.abilities.length > 0){
        for (let i =0; i< datos.abilities.length; i++){
          this.pokemon.abilities.push(datos.abilities[i].ability);
        }
        }

      },
      error: err => {
        console.log(err);
      }
    })
  }

}
