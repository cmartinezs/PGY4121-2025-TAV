import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamplePageRoutingModule } from './example-routing.module';

import { ExamplePage } from './example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamplePageRoutingModule
  ],
  declarations: [ExamplePage]
})
export class ExamplePageModule {}
