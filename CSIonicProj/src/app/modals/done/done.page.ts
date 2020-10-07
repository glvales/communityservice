import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeDone() {
    await this.modalController.dismiss();
  }

}
