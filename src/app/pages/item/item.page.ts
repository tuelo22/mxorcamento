import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { NavController } from '@ionic/angular';
import { OrcamentoService } from '../orcamento-novo/orcamento-novo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  itens: any[];
  result: any[];

  constructor(private navCtrl: NavController,
              private itemService: ItemService,
              private orcamentoService: OrcamentoService) { }

  ngOnInit() {
    this.itemService.obterItens().subscribe(x => this.result = x);
  }

  ItemClick(index: any) {
    const item =  this.result[index];
    this.itemService.SetItem(item);
    this.navCtrl.navigateForward('item-novo');

    this.orcamentoService.OrcamentoAtual.subscribe(arg => {
      arg.ItensOrcamentoVendas = [];
      arg.ItensOrcamentoVendas.push(item);
    } );
  }
}
