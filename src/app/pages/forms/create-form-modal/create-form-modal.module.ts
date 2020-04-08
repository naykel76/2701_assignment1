import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFormModalPageRoutingModule } from './create-form-modal-routing.module';

import { CreateFormModalPage } from './create-form-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFormModalPageRoutingModule
  ],
  declarations: [CreateFormModalPage]
})
export class CreateFormModalPageModule {}
