import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrcamentoNovoPage } from './orcamento-novo.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoNovoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrcamentoNovoPage]
})
export class OrcamentoNovoPageModule {}
