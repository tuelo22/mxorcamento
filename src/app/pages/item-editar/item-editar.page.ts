import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-editar',
  templateUrl: './item-editar.page.html',
  styleUrls: ['./item-editar.page.scss'],
})
export class ItemEditarPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  impostoClick(){
    this.navCtrl.navigateForward('impostos');
  }

}
