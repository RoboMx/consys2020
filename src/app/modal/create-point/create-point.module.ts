import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePointPageRoutingModule } from './create-point-routing.module';

import { CreatePointPage } from './create-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePointPageRoutingModule
  ],
  declarations: [CreatePointPage]
})
export class CreatePointPageModule {}
