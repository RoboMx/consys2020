import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentilatorPageRoutingModule } from './ventilator-routing.module';

import { VentilatorPage } from './ventilator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentilatorPageRoutingModule
  ],
  declarations: [VentilatorPage]
})
export class VentilatorPageModule {}
