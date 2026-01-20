import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Pokemon {
  
  constructor() { }

  getByPage() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
  }

  getById() {
    //https://pokeapi.co/api/v2/pokemon/
  }

  getDescripcion() {

  }

}
