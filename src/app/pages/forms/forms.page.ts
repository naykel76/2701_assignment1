import { Component, OnInit } from '@angular/core';

import { FORMS } from '../../data/forms-list';
import { ModalController } from '@ionic/angular';
import { CreateFormModalPage } from './create-form-modal/create-form-modal.page';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.page.html',
    styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

    forms = FORMS;

    constructor(private modalCtrl: ModalController) {
        console.log(this.forms);
    }

    ngOnInit() {
    }

    async openModal() {

        const modal = await this.modalCtrl.create({
            // the actual modal page class
            component: CreateFormModalPage,
            // values to be passed into the modal
            componentProps: { }
        });

        // display the modal
        return modal.present();
    }
}
