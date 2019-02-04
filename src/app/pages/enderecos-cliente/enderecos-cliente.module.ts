import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnderecosClientePage } from './enderecos-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecosClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnderecosClientePage]
})
export class EnderecosClientePageModule {}
