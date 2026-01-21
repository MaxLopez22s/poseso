import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { NgIf, TitleCasePipe } from '@angular/common';
import { Pokemon } from '../../services/pokemon';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [NgIf, TitleCasePipe],
  templateUrl: './tarjeta-pokemon.html',
  styleUrl: './tarjeta-pokemon.scss',
})
export class TarjetaPokemon implements OnChanges {

  constructor(private Pokemon: Pokemon) { }

  ngOnChanges(): void {
    this.extraerInformacion();
  }



  @Input() data?: Resultado;
  id:string = '0';

  extraerInformacion() {
    if(this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.Pokemon.getById(this.id);
    }
  }

}
