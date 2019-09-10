import { Router } from '@angular/router';
import { OrcamentoService } from './../orcamento-novo/orcamento-novo.service';
import { ComumService } from './../../comum.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrcamentoNovoPage } from '../orcamento-novo/orcamento-novo.page';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: any[];
  result: any;

  constructor(private navCtrl: NavController,
              private clienteService: ClienteService,
              private orcamentoService: OrcamentoService) { }

  ngOnInit() {
    this.clienteService.obterUsuario().subscribe(x => this.result = x);
  }

  ItemClick(index: any) {
    const client =  this.result[index];
    console.log(client);
    this.orcamentoService.SetCliente(client);
    this.navCtrl.navigateForward('orcamento-novo');
  }
}


