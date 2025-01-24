import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { Place } from 'src/app/model/geo-data';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-scan-coords',
  templateUrl: './scan-coords.page.html',
  styleUrls: ['./scan-coords.page.scss'],
  standalone: false
})
export class ScanCoordsPage implements OnInit {
  
  qrData!: string;
  lat!: number;
  lng!: number;
  place!: Place;

  constructor(
    private router: Router,
    private geoService: GeolocationService,
    private alertCtrl: AlertController
  ) {}

  async startScan() {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL
      });

      if (result) {
        //-33.5001155,-70.6160476
        this.qrData = result.ScanResult;
        console.log('Contenido del código QR:', this.qrData);
        const [lat, lng] = this.qrData.split(',');
        console.log('datos:', this.qrData.split(','));
        this.lat = parseFloat(lat.trim());
        this.lng = parseFloat(lng.trim());
      } else {
        alert('No se detectó contenido en el código QR.');
      }
    } catch (error) {
      console.error('Error durante el escaneo:', error);
      alert('Hubo un problema al escanear. Inténtalo de nuevo.');
    }
  }

  getPlace() {
    if (!this.lat || !this.lng) {
      this.alertCtrl.create({
        header: 'Error',
        message: 'Primero debes escanear un código QR.',
        buttons: ['OK']
      }).then(alert => alert.present());
      return;
    }

    this.geoService.getAddress(this.lat, this.lng)
      .subscribe(place => {
        console.log('Lugar:', place);
        this.place = place;
      });
  }

  ngOnInit() {
  }

}
