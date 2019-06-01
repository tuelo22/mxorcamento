import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController } from '@ionic/angular';
import { ComponentPopoverOrdernarComponent } from 'src/app/component-popover-ordernar/component-popover-ordernar.component';


@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.page.html',
  styleUrls: ['./orcamentos.page.scss'],
})
export class OrcamentosPage implements OnInit {

  constructor(
    private navCtrl : NavController, 
    private menu: MenuController, 
    private popoverCtrl: PopoverController) {
  }

  fabClick(){
    this.navCtrl.navigateForward('orcamento-novo');
  }

  cardClick(){
    this.navCtrl.navigateForward('orcamento-editar');   
  }

  ngOnInit() {
  }

  async showMenu(event: any){
    let popover = await this.popoverCtrl.create({
      component: ComponentPopoverOrdernarComponent,
      event: event,
      animated: true
    });

    return await popover.present();
  }

}
