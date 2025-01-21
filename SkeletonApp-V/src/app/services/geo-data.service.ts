import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeoData } from '../model/geo-data';

@Injectable({
  providedIn: 'root'
})
export class GeoDataService {

  url = 'https://nominatim.openstreetmap.org/reverse';

  constructor(
      private http: HttpClient
    ) { }

  getGetData(lat: number, lon: number){
    return this.http.get<GeoData>(`${this.url}?lat=${lat}&lon=${lon}&format=json`);
  }
}
