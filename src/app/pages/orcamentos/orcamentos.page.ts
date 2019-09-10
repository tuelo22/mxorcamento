import { OrcamentosService } from './../../services/orcamentos.service';
import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController } from '@ionic/angular';
import { ComponentPopoverOrdernarComponent } from 'src/app/component-popover-ordernar/component-popover-ordernar.component';


@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.page.html',
  styleUrls: ['./orcamentos.page.scss'],
})
export class OrcamentosPage implements OnInit {

  result: any;

  constructor(
    private navCtrl : NavController, 
    private menu: MenuController, 
    private popoverCtrl: PopoverController,
    private orcamentosService: OrcamentosService) {
  }

  fabClick(){
    this.navCtrl.navigateForward('orcamento-novo');
  }

  cardClick(){
    this.navCtrl.navigateForward('orcamento-editar');   
  }

  ngOnInit() {
    this.orcamentosService.obterOrcamentos().subscribe(x => this.result = x);

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
