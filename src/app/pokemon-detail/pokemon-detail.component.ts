import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from '../services/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string = '';

  constructor(
    private pokemonDetailService:PokemonDetailService
  ) { }

  ngOnInit(){ 
    this.pokemonDetailService.detail$.subscribe(name => this.pokemonName = name);
  }
}
