import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordsDistancePage } from './coords-distance.page';

const routes: Routes = [
  {
    path: '',
    component: CoordsDistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordsDistancePageRoutingModule {}
