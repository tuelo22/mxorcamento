import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnderecoNovoPage } from './endereco-novo.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoNovoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnderecoNovoPage]
})
export class EnderecoNovoPageModule {}
