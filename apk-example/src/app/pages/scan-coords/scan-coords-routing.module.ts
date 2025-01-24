import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanCoordsPage } from './scan-coords.page';

const routes: Routes = [
  {
    path: '',
    component: ScanCoordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanCoordsPageRoutingModule {}
