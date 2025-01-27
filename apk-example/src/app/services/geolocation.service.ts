import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../model/geo-data';
import { catchError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private http: HttpClient
  ) { }

  getAddress(lat: number, lng: number) {
    return this.http
    .get<Place>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    .pipe(
      timeout(5000),
      catchError(
        error => {
          console.error('get error:', error);
          throw error;
        }
      )
    );
  }
}
