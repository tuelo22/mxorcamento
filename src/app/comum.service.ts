import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ComumService {

  constructor(private navCtrl: NavController) { }

  backPage (){
    this.navCtrl.navigateBack('orcamento-novo');
  }
}
