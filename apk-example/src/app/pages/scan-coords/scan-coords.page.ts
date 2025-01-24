import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
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
    private geoService: GeolocationService
  ) {}

  async startScan() {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL
      });

      if (result) {
        //-33.5001155,-70.6160476
        const qrContent = result.ScanResult;
        console.log('Contenido del código QR:', qrContent);
        const [lat, lng] = qrContent.split(',');
        console.log('datos:', qrContent.split(','));
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
    this.geoService.getAddress(this.lat, this.lng)
      .subscribe(place => {
        console.log('Lugar:', place);
      });
  }

  ngOnInit() {
  }

}
