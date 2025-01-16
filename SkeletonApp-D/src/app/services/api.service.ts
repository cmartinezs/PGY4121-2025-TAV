import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRMCharacter } from '../model/get-response-rm-character';
import { RMCharacter } from '../model/rm-character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rickAndMortyUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  getRickAndMortyCharacters(page: number) {
    return this.http.get<ResponseRMCharacter>(`${this.rickAndMortyUrl}/?page=${page}`)
  }

  getRickAndMortyCharacterById(id: number) {
    return this.http.get<RMCharacter>(`${this.rickAndMortyUrl}/${id}`)
  }
}
