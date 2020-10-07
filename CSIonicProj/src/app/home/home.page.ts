import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoPage } from '../modals/todo/todo.page';
import { InprogressPage } from '../modals/inprogress/inprogress.page';
import { DonePage } from '../modals/done/done.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private modalController: ModalController) {}

  async openModalTodo() {
    const modal = await this.modalController.create({
      component: TodoPage
    });
    return await modal.present();
  }

  async openModalInprogress() {
    const modal = await this.modalController.create({
      component: InprogressPage
    });
    return await modal.present();
  }

  async openModalDone() {
    const modal = await this.modalController.create({
      component: DonePage
    });
    return await modal.present();
  }
}