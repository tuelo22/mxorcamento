import { ComumService } from './../../comum.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OrcamentoService } from '../orcamento-novo/orcamento-novo.service';

@Component({
  selector: 'app-enderecos-cliente',
  templateUrl: './enderecos-cliente.page.html',
  styleUrls: ['./enderecos-cliente.page.scss'],
})
export class EnderecosClientePage implements OnInit {

  enderecos: string[] = [ 'Hospital de Clinicas de Niterói',
                         'Hospital Rio Laranjeiras',
                         'Hospital São Lucas',
                         'Hospital Espanhol',
                         'Hospital Unimed-Rio'];

  constructor(private navCtrl: NavController,
              private orcamentoService: OrcamentoService) { }

  ngOnInit() {
  }
  ItemClick(index: any) {
    const enderecoEntrega =  this.enderecos[index];
    console.log(enderecoEntrega);
    this.orcamentoService.setEnderecoEntrega(enderecoEntrega);
    this.navCtrl.navigateForward('orcamento-novo');
  }
}
