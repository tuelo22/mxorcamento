import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComumService } from 'src/app/comum.service';
import { OrcamentoService } from '../orcamento-novo/orcamento-novo.service';

@Component({
  selector: 'app-tipo-entrega',
  templateUrl: './tipo-entrega.page.html',
  styleUrls: ['./tipo-entrega.page.scss'],
})
export class TipoEntregaPage implements OnInit {

  tiposEntrega : string[] = ['01 - CIF', '02 - FOB', '03 - Terceiros'];

  constructor(private navCtrl: NavController,
              private comumService : ComumService, 
              private orcamentoService: OrcamentoService) { }

  ngOnInit() {
  }

  ItemClick(index: any){
    const tipoEntrega =  this.tiposEntrega[index];
    console.log(tipoEntrega);
    this.orcamentoService.setTipoEntrega(tipoEntrega);
    this.navCtrl.navigateForward('orcamento-novo');
  }
}


