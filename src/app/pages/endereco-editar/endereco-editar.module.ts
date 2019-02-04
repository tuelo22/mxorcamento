import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnderecoEditarPage } from './endereco-editar.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoEditarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnderecoEditarPage]
})
export class EnderecoEditarPageModule {}
