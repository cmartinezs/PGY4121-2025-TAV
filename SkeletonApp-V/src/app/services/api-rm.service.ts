import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRMCharacter } from '../model/rm-response-characters';
import { RMCharacter } from '../model/rm-character';

@Injectable({
  providedIn: 'root'
})
export class ApiRmService {

  rmUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(pageNumber: number) {
    return this.http.get<ResponseRMCharacter>(`${this.rmUrl}/?page=${pageNumber}`);
  }

  getCharacter(id: number) {
    return this.http.get<RMCharacter>(`${this.rmUrl}/${id}`)
    //https://rickandmortyapi.com/api/character/1
  }
}
