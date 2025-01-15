import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  standalone: false,
})
export class GeolocationPage implements OnInit {

  latitude!: number;
  longitude!: number;
  accuracy!: number;
  altitude!: number;
  altitudeAccuracy!: number;
  heading!: number;
  speed!: number;
  timestamp!: number;

  status!: string;

  constructor(
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.getNetworkStatus();
  }

  async getNetworkStatus(){
    const connStatus = await Network.getStatus();
    this.status = connStatus.connected ? 'Conectado' : 'Desconectado';
  }

  async getCurrentPosition() {
    const loading = await this.loadingCtrl.create({
      message: 'Obteniendo ubicacion GPS...',
    });
    loading.present();

    await new Promise(f => setTimeout(f, 2000)); //espera de 2 segundos

    Geolocation
      .getCurrentPosition()
      .then(p => {
        this.latitude = p.coords.latitude;
        this.longitude = p.coords.longitude;
        this.accuracy = p.coords.accuracy;
        this.altitude = p.coords.altitude ?? 0;
        this.altitudeAccuracy = p.coords.altitudeAccuracy ?? 0;
        this.heading = p.coords.heading ?? 0;
        this.speed = p.coords.speed ?? 0;
        this.timestamp = p.timestamp;
      })
      .finally(() => loading.dismiss());
  }
}
