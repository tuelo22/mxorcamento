import { OrcamentoService } from './../orcamento-novo/orcamento-novo.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.page.html',
  styleUrls: ['./enderecos.page.scss'],
})
export class EnderecosPage implements OnInit {

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
    this.navCtrl.navigateForward('enderecos-enderecoEntrega');
  }

}
