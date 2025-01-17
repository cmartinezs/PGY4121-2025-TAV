import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRMCharacter } from '../model/rm-response-characters';

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
}
