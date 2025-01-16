import { Component, OnInit } from '@angular/core';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import { ViewWillEnter } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  standalone: false,
})
export class QrPage implements OnInit, ViewWillEnter {

  result: string = ''
  results: string[] = [];

  username: string;

  constructor(
    private localStorageService: LocalStorageService,
    private sessionService: SessionService
  ) {
    this.username = this.sessionService.getUserSession();
  }
  
  async scan() {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    console.log('Scan result:', result);
    this.result = result.ScanResult;
    this.results.push(result.ScanResult);
    this.localStorageService.save(`scans_${this.username}`, this.results);
  }

  delete(scan: string) {
    this.results = 
      this.results.filter(result => result !== scan);
  }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.results = this.localStorageService.get(`scans_${this.username}`) ?? [];
  }
}
