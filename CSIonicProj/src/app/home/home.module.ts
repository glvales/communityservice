import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TodoPage } from '../modals/todo/todo.page';
import { InprogressPage } from '../modals/inprogress/inprogress.page';
import { DonePage } from '../modals/done/done.page';

import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TodoPage, InprogressPage, DonePage],
  entryComponents: [TodoPage, InprogressPage, DonePage]
})
export class HomePageModule {}
