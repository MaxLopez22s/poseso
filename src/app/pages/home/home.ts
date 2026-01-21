import { Component, OnInit } from '@angular/core';
import { FotoPokemon } from '../../components/foto-pokemon/foto-pokemon';
import { TarjetaPokemon } from '../../components/tarjeta-pokemon/tarjeta-pokemon';
import { Pokemon } from '../../services/pokemon';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemon, TarjetaPokemon, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  constructor(private pokemonService: Pokemon) { }

  listaPokemon:Resultado[] = []

  pagina:number = 0;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage(this.pagina)];
    console.log(this.listaPokemon);
    this.pagina++;
  }

}
