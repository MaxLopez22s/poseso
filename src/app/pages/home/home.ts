import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { FotoPokemon } from '../../components/foto-pokemon/foto-pokemon';
import { TarjetaPokemon } from '../../components/tarjeta-pokemon/tarjeta-pokemon';
import { Detalle } from '../../components/detalle/detalle';
import { PokemonService } from '../../services/pokemonService';
import { Resultado } from '../../interfaces/pokeapi';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,              // 👈 CLAVE
    FotoPokemon,
    TarjetaPokemon,
    Detalle
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  @ViewChild('tarjetas') tarjetasElement!:ElementRef;

  listaPokemon:Resultado[] = []

  pagina:number = 1;
  cargando: boolean = false;
  pokemonSeleccionado?: Pokemon;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.cargando = true;
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage(this.pagina)];
    console.log(this.listaPokemon);
    this.cargando = false;
    this.pagina++;
  }

  onScroll(e:any) {
    if (this.cargando) return;
    this.cargando = true;
    console.log(e);
    if (
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
    )
    === e.srcElement.scrollHeight){
      this.cargarLista();
    }
  }

  async tarjetaClickeada(id:string) {
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }

}
