import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { ComponetPopoverOrdernarItensComponent } from '../componet-popover-ordernar-itens/componet-popover-ordernar-itens.component';

@Component({
  selector: 'app-itens-vazio',
  templateUrl: './itens-vazio.page.html',
  styleUrls: ['./itens-vazio.page.scss'],
})
export class ItensVazioPage implements OnInit {

  constructor(private navCtrl : NavController, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  fabClick(){
    this.navCtrl.navigateForward('item-novo');
  }
  editItemClick(){
    this.navCtrl.navigateForward('item-editar');
  }
  async showMenu(event: any){
    let popover = await this.popoverCtrl.create({
      component: ComponetPopoverOrdernarItensComponent,
      event: event,
      animated: true
    });

    return await popover.present();
  }
}
