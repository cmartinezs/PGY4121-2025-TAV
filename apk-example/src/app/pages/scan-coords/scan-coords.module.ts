import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanCoordsPageRoutingModule } from './scan-coords-routing.module';

import { ScanCoordsPage } from './scan-coords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanCoordsPageRoutingModule
  ],
  declarations: [ScanCoordsPage]
})
export class ScanCoordsPageModule {}
