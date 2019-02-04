import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enderecos-cliente',
  templateUrl: './enderecos-cliente.page.html',
  styleUrls: ['./enderecos-cliente.page.scss'],
})
export class EnderecosClientePage implements OnInit {

  enderecos : string[] =[ 'Rua La Salle, 12 - Centro, Niterói - RJ, 24020-096'];

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  
  ItemClick(){
    this.navCtrl.navigateForward('endereco-editar');
  }
  fabClick(){
    this.navCtrl.navigateForward('endereco-novo');
  }
}
