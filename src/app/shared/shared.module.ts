import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CustomButtonComponent]
})
export class SharedModule { }
