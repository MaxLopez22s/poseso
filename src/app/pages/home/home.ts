import { Component } from '@angular/core';
import { FotoPokemon } from '../../components/foto-pokemon/foto-pokemon';
import { TarjetaPokemon } from '../../components/tarjeta-pokemon/tarjeta-pokemon';

@Component({
  selector: 'app-home',
  imports: [FotoPokemon, TarjetaPokemon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
