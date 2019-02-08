import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItensPage } from './itens.page';
import { ComponetPopoverOrdernarItensComponent } from 'src/app/componet-popover-ordernar-itens/componet-popover-ordernar-itens.component';

const routes: Routes = [
  {
    path: '',
    component: ItensPage
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItensPage, ComponetPopoverOrdernarItensComponent],
  entryComponents: [ComponetPopoverOrdernarItensComponent]
})
export class ItensPageModule {}
