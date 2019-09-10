import { Component, OnInit } from '@angular/core';
import { ComumService } from 'src/app/comum.service';
import { NavController } from '@ionic/angular';
import { OrcamentoService } from '../orcamento-novo/orcamento-novo.service';

@Component({
  selector: 'app-condicao-pagamento',
  templateUrl: './condicao-pagamento.page.html',
  styleUrls: ['./condicao-pagamento.page.scss'],
})
export class CondicaoPagamentoPage implements OnInit {

  condicoesPagamento: string[] = ['01 - A Vista', '02 - Parcelado (12x)', '03 - Parcelado (6x)'];

  constructor(private navCtrl: NavController,
    private orcamentoService: OrcamentoService) { }

  ngOnInit() {
  }

  ItemClick(index: any) {
    const condicaoPagamento =  this.condicoesPagamento[index];
    console.log(condicaoPagamento);
    this.orcamentoService.setCondicaoPagamento(condicaoPagamento);
    this.navCtrl.navigateForward('orcamento-novo');
  }
}


