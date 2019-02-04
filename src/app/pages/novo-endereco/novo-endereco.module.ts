import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoEnderecoPage } from './novo-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: NovoEnderecoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoEnderecoPage]
})
export class NovoEnderecoPageModule {}
