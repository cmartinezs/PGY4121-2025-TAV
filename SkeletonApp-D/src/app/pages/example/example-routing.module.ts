import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplePage } from './example.page';

const routes: Routes = [
  {
    path: '',
    component: ExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplePageRoutingModule {}
