import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import {ParentRemoveDirective} from './elements/parent-remove.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpinnerComponent} from '../spinner/spinner.component';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ClickOutsideModule
  ],
  declarations: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ParentRemoveDirective,
      SpinnerComponent
  ],
  exports: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ParentRemoveDirective,
      SpinnerComponent,
      FormsModule,
      ReactiveFormsModule,
      ClickOutsideModule
  ],
  providers: [
      MenuItems
  ]
})
export class SharedModule { }
