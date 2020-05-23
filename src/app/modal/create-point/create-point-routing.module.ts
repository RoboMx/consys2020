import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePointPage } from './create-point.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePointPageRoutingModule {}
