import { OrcamentoService } from './orcamento-novo.service';
import { ClienteService } from '../../services/cliente.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { Orcamento } from './orcamento';
import { tap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-orcamento-novo',
  templateUrl: './orcamento-novo.page.html',
  styleUrls: ['./orcamento-novo.page.scss'],
})
export class OrcamentoNovoPage implements OnInit {

  conteudoCliente: string;
  orcamento: Orcamento;
  result: any;
  numeroOrcamentoGerado: any;

  constructor(
    private navCtrl: NavController,
    private clienteService: ClienteService,
    private orcamentoService: OrcamentoService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.orcamentoService.OrcamentoAtual.subscribe(arg => {
      this.orcamento = arg;
    } );
  }

  fabClick() {
    this.navCtrl.navigateForward('lista-itens');
  }
  impostoClick() {
    this.navCtrl.navigateForward('impostos');
  }
  enderecoClick() {
    this.navCtrl.navigateForward('enderecos-cliente');
  }
  clienteClick() {
    this.navCtrl.navigateForward('clientes');
   }
   tipoEntregaClick() {
     this.navCtrl.navigateForward('tipo-entrega');
   }
   condicaoPagamentoClick() {
     this.navCtrl.navigateForward('condicao-pagamento');
   }

   async gravarOrcamento() {
    this.orcamentoService.gravarOrcamento(this.orcamento).subscribe(x => this.result = x);
    // this.limparCampos();
   }

   limparCampos() {
     this.orcamento.CodigoCliente = '';
     this.orcamento.CodigoCondicaoPagamento = '';
     this.orcamento.CodigoEmpresa = '';
     this.orcamento.CodigoEnderecoEntrega = '';
     this.orcamento.CodigoFilial = '';
     this.orcamento.CodigoTipoEntrega = '';
     this.orcamento.DescricaoCliente = '';
     this.orcamento.Observacao = '';
     this.orcamento.OrdemVenda = '';
     this.orcamento.PrazoEntrega = '';
     this.orcamento.Total = 0;
     this.orcamento.Validade = '';
     this.orcamento.ItensOrcamentoVendas[0].Codigo = '';
     this.orcamento.ItensOrcamentoVendas[0].Desconto = 0;
     this.orcamento.ItensOrcamentoVendas[0].DescricaoTabelaPreco = '';
     this.orcamento.ItensOrcamentoVendas[0].Preco = 0;
     this.orcamento.ItensOrcamentoVendas[0].Quantidade = 0;
     this.orcamento.ItensOrcamentoVendas[0].TabelaPreco = '';
     this.orcamento.ItensOrcamentoVendas[0].Total = 0;
     this.orcamento.ItensOrcamentoVendas[0].Unidade = '';
   }
}
