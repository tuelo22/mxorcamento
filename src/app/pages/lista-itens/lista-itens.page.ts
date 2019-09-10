import { OrcamentoService } from './../orcamento-novo/orcamento-novo.service';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.page.html',
  styleUrls: ['./lista-itens.page.scss'],
})
export class ListaItensPage implements OnInit {

  itens: any [];

  constructor(private orcamentoService: OrcamentoService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.orcamentoService.OrcamentoAtual.subscribe(arg => {
      this.itens = arg.ItensOrcamentoVendas;
    } );

    console.log(this.itens);
  }

  fabClick() {
    this.navCtrl.navigateForward('item-novo');
  }

}
