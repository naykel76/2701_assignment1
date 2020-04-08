import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFormModalPage } from './create-form-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFormModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFormModalPageRoutingModule {}
