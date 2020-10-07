import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.page.html',
  styleUrls: ['./inprogress.page.scss'],
})
export class InprogressPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeInprogress() {
    await this.modalController.dismiss();
  }

}
