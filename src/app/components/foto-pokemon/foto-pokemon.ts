import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-foto-pokemon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './foto-pokemon.html',
  styleUrl: './foto-pokemon.scss',
})
export class FotoPokemon {

  @Input() pokemon?: Pokemon;

}
