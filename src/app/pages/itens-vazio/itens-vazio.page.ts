import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-itens-vazio',
  templateUrl: './itens-vazio.page.html',
  styleUrls: ['./itens-vazio.page.scss'],
})
export class ItensVazioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fabClick() {
    this.navCtrl.navigateForward('item-novo');
  }
  editItemClick() {
    this.navCtrl.navigateForward('item-editar');
  }
}
