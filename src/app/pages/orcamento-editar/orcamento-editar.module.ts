import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrcamentoEditarPage } from './orcamento-editar.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoEditarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrcamentoEditarPage]
})
export class OrcamentoEditarPageModule {}
