import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orcamento-editar',
  templateUrl: './orcamento-editar.page.html',
  styleUrls: ['./orcamento-editar.page.scss'],
})
export class OrcamentoEditarPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  fabClick(){
    this.navCtrl.navigateForward('itens');
  }
  versaoClick(){
    this.navCtrl.navigateForward('orcamento-versao');
  }
}
