import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [    
    CommonModule,
    ChartsModule
  ]
})
export class SharedFeaturesModule { }
