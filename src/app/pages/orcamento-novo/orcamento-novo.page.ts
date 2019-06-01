import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orcamento-novo',
  templateUrl: './orcamento-novo.page.html',
  styleUrls: ['./orcamento-novo.page.scss'],
})
export class OrcamentoNovoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  fabClick(){
    this.navCtrl.navigateForward('itens-vazio');
  }
  impostoClick(){
    this.navCtrl.navigateForward('impostos');
  }
  enderecoClick(){
    this.navCtrl.navigateForward('enderecos-cliente');  
  }
}
