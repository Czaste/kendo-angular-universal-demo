import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '../shared/shared.module';

import { LabelClass } from './label.directive';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    GridModule,
    LayoutModule
  ],
  declarations: [
    HomeComponent,
    LabelClass,
    MarkdownComponent
  ]
})
export class HomeModule { }