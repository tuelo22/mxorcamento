import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CondicaoPagamentoPage } from './condicao-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: CondicaoPagamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CondicaoPagamentoPage]
})
export class CondicaoPagamentoPageModule {}
