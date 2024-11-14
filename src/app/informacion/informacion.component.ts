import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonApi } from '../services/interfaces/pokemon';
import { InformacionService } from '../services/modales/informacion.service';
import { EnviarPokemonService } from '../services/pokemon/enviar-pokemon.service';
import { PokemonApiService } from '../services/pokemon/pokemon-api.service';
import { Router } from '@angular/router';
import { PokemonDetailService } from '../services/pokemon/pokemon-detail.service';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit {

  mostrarModal: boolean = false;
  pokemonsApi: PokemonApi[] = [];

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private pokemonApiService: PokemonApiService,
    private pokemonDetailService:PokemonDetailService,
    private router : Router
  ) { }

  ngOnInit() {
   this.informacionService.modal$.subscribe(modal =>{
    this.mostrarModal = modal;
   });
   this.pokemonApiService.getAllPokemon().subscribe({
    //obligatorio next y error
    //opcional complete
    next: datos => {//sila comunicacion y la respuesta es exitosa
      //console.log(datos.results);
      this.pokemonsApi = datos.results;
      console.log(this.pokemonsApi);
    },
    error: err => {//si hay un error en la comunicacion
      console.log(err)
    },
    complete: () => {
      console.log("comunicacion finalizada")
    }


   });
  }

  abrirModal(pk:Pokemon){
    this.enviarPokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
  }



  pokemon: Pokemon[]= [
    {id:1,nombre:"RAICHU", descripcion:"RRRAAAIII RAIII",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0f%2Fd4%2Fe2%2F0fd4e2a1531ca011d9dba5291815a87d.jpg&f=1&nofb=1&ipt=eada204025fba1411ec63eeec06c6352cc7ce4650fae8a8506a351b4d85c6c27&ipo=images"},
    {id:2,nombre:"PSYDUCK", descripcion:"PSYYYYY PSYYY",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F27%2F8e%2Fab%2F278eabdded52fa534dcd51c94d77f067.jpg&f=1&nofb=1&ipt=ab2ea978b3b641d2d2a994026fbe477436c4c972a86155e2b067cc706ad3fe11&ipo=images"},
    {id:3,nombre:"JOLTEON", descripcion:"Kjjjj Kjjjj",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fphotos-premium%2Fvie-reelle-jolteon-pokemon-ia-art-generatif_905627-1194.jpg&f=1&nofb=1&ipt=72c08249eee5fafb5e76c106ba01e6dd6f32fcab74b19987a44ed1c77b7ea5f0&ipo=images"},
    {id:4,nombre:"PIDGEY", descripcion:"PIO PIO",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sopitas.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fpokemon-8.png&f=1&nofb=1&ipt=7328990987bb7943c31187d9d88b60d2f65642e00159abd70f8e985113f20bfe&ipo=images"},
    {id:5,nombre:"PIKACHU", descripcion:"PIKA PIKA",image_url:"https://www.laguiadelvaron.com/wp-content/uploads/2017/02/artstation.com-joshua-dunlop-pikachu-watermarked-compressed-1-1-730x570.jpg"},
    {id:6,nombre:"BULBASAUR", descripcion:"BULBASOOOR",image_url:"https://www.laguiadelvaron.com/wp-content/uploads/2017/02/artstation.com-joshua-dunlop-bulbasaur-watermarked-730x550.jpg"},
  ]

  detallesPokemon(nombre: string){
    //debemos enviar el nombre del pokemon a traves de BehaviourSubject al componen pokemon-detalle
    this.pokemonDetailService.setItem(nombre);

    this.router.navigate(['detalles']);
  }

}
