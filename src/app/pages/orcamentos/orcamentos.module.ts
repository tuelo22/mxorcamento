import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrcamentosPage } from './orcamentos.page';
import { ComponentPopoverOrdernarComponent } from 'src/app/component-popover-ordernar/component-popover-ordernar.component';


const routes: Routes = [
  {
    path: '',
    component: OrcamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrcamentosPage, ComponentPopoverOrdernarComponent],
  entryComponents: [ComponentPopoverOrdernarComponent]
})
export class OrcamentosPageModule {}
