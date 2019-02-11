import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItensVazioPage } from './itens-vazio.page';
import { ComponetPopoverOrdernarItensComponent } from '../componet-popover-ordernar-itens/componet-popover-ordernar-itens.component';

const routes: Routes = [
  {
    path: '',
    component: ItensVazioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItensVazioPage, ComponetPopoverOrdernarItensComponent],
  entryComponents: [ComponetPopoverOrdernarItensComponent]
})
export class ItensVazioPageModule {}
