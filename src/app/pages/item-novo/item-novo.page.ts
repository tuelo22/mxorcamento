import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item } from '../item/item';
import { ItemService } from 'src/app/services/item.service';
import { OrcamentoService } from '../orcamento-novo/orcamento-novo.service';

@Component({
  selector: 'app-item-novo',
  templateUrl: './item-novo.page.html',
  styleUrls: ['./item-novo.page.scss'],
})
export class ItemNovoPage implements OnInit {
  total: number;
  item: Item;

  constructor(private navCtrl: NavController,
              private itemService: ItemService,
              private orcamentoService: OrcamentoService) { }

  ngOnInit() {
    this.itemService.ItemAtual.subscribe(arg => {
      this.item = arg;
    } );
  }

  itensClick() {
    this.navCtrl.navigateForward('item');
  }

  adicionarItem() {
    this.orcamentoService.setItens(this.item);

     this.orcamentoService.OrcamentoAtual.subscribe(arg => {
      arg.ItensOrcamentoVendas = [];
      arg.ItensOrcamentoVendas.push(this.item);
     } );

    this.navCtrl.navigateForward('lista-itens');
  }
}
