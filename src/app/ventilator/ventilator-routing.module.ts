import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentilatorPage } from './ventilator.page';

const routes: Routes = [
  {
    path: '',
    component: VentilatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentilatorPageRoutingModule {}
