import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordsDistancePageRoutingModule } from './coords-distance-routing.module';

import { CoordsDistancePage } from './coords-distance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordsDistancePageRoutingModule
  ],
  declarations: [CoordsDistancePage]
})
export class CoordsDistancePageModule {}
