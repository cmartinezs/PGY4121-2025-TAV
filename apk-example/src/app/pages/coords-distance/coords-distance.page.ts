import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ViewWillEnter } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { Place } from 'src/app/model/geo-data';

@Component({
  selector: 'app-coords-distance',
  templateUrl: './coords-distance.page.html',
  styleUrls: ['./coords-distance.page.scss'],
  standalone: false,
})
export class CoordsDistancePage implements OnInit, ViewWillEnter {
  lat!: number;
  lng!: number;
  place!: Place;

  lat2!: number;
  lng2!: number;
  place2!: Place;

  distance!: number;

  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private geoService: GeolocationService
  ) {}

  async ionViewWillEnter() {
    // rescatar las coordenadas por url
    console.log('entramos');
    this.lat = parseFloat(this.route.snapshot.paramMap.get('lat') ?? '0');
    this.lng = parseFloat(this.route.snapshot.paramMap.get('lng') ?? '0');

    if (this.lat === 0 || this.lng === 0) {
      this.alertCtrl
        .create({
          header: 'Error',
          message: 'las coordenadas no son válidas.',
          buttons: ['OK'],
        })
        .then((alert) => alert.present());
      return;
    }

    // obtener las coordenadas por dispositivo
    const position = await Geolocation.getCurrentPosition();
    console.log('get current position');
    this.lat2 = position.coords.latitude;
    this.lng2 = position.coords.longitude;

    this.geoService
      .getAddress(position.coords.latitude, position.coords.longitude)
      .subscribe((place) => {
        console.log('Lugar:', place);
      });


    this.distance = this.getDistanceInKm(this.lat, this.lng, this.lat2, this.lng2);
    console.log(`La distancia es: ${this.distance.toFixed(2)} km`);
    console.log('fin');
  }

  ngOnInit() {}

  /**
   * Calcula la distancia en kilómetros entre dos puntos (lat1, lon1) y (lat2, lon2)
   * utilizando la fórmula de Haversine.
   * @param lat1 - Latitud del primer punto
   * @param lon1 - Longitud del primer punto
   * @param lat2 - Latitud del segundo punto
   * @param lon2 - Longitud del segundo punto
   * @returns Distancia en kilómetros (number)
   */
  getDistanceInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    // Radio de la Tierra en kilómetros
    const R = 6371;

    // Convertir grados a radianes
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);

    // Fórmula de Haversine
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Convierte grados a radianes.
   */
  deg2rad(deg: number): number {
    return (deg * Math.PI) / 180;
  }
}
