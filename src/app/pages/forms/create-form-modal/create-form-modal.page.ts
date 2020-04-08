import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-create-form-modal',
    templateUrl: './create-form-modal.page.html',
    styleUrls: ['./create-form-modal.page.scss'],
})
export class CreateFormModalPage implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }
}
