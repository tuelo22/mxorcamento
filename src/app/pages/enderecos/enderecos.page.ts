import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.page.html',
  styleUrls: ['./enderecos.page.scss'],
})
export class EnderecosPage implements OnInit {

  clientes : string[] =[ 'Hospital de Clinicas de Niterói', 
                       'Hospital Rio Laranjeiras', 
                       'Hospital São Lucas',
                       'Hospital Espanhol',
                       'Hospital Unimed-Rio'];

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  ItemClick(){
    this.navCtrl.navigateForward('enderecos-cliente');
  }

}
