import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickAndMortyPageRoutingModule } from './rick-and-morty-routing.module';

import { RickAndMortyPage } from './rick-and-morty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickAndMortyPageRoutingModule
  ],
  declarations: [RickAndMortyPage]
})
export class RickAndMortyPageModule {}
