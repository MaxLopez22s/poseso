import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { NgIf, TitleCasePipe, NgClass } from '@angular/common';
import { PokemonService } from '../../services/pokemonService';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [NgIf, TitleCasePipe, NgClass],
  templateUrl: './tarjeta-pokemon.html',
  styleUrl: './tarjeta-pokemon.scss',
})
export class TarjetaPokemon implements OnChanges {

  constructor(private Pokemon: PokemonService) { }

  ngOnChanges(): void {
    this.extraerInformacion();
  }



  @Input() data?: Resultado;
  @Input() selecionado: boolean = false;
  @Output() clickeado = new EventEmitter<string>();
  id:string = '0';

  extraerInformacion() {
    if(this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.Pokemon.getById(this.id);
    }
  }

}
