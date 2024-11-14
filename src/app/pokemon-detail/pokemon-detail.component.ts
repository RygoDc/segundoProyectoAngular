import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from '../services/pokemon/pokemon-detail.service';
import {DetailService} from '../services/pokemon/detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string = '';

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
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
