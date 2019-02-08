import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orcamento-versao',
  templateUrl: './orcamento-versao.page.html',
  styleUrls: ['./orcamento-versao.page.scss'],
})
export class OrcamentoVersaoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  public versoes = [
    {
      data:'31/01/2019',
      observacao:'reuniao 6',
      sequencia:'6'
    },
    {
      data:'31/12/2018',
      observacao:'reuniao 5',
      sequencia:'5'
    },
    {
      data:'20/12/2018',
      observacao:'reuniao 4',
      sequencia:'4'
    },
    {
      data:'03/12/2018',
      observacao:'reuniao 3',
      sequencia:'3'
    },
    {
      data:'24/11/2018',
      observacao:'reuniao 2',
      sequencia:'2'
    },
    {
      data:'08/11/2018',
      observacao:'reuniao 1',
      sequencia:'1'
    }];

    ItemClick(){
      this.navCtrl.goBack();
    }

  ngOnInit() {
  }

}
