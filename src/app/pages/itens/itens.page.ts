import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.page.html',
  styleUrls: ['./itens.page.scss'],
})
export class ItensPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  public itens = [
    {
      codigo:'G00166',
      descricao:'Percutaneous Entry Needle Cook® 18 Gauge 7 cm',
      unidade:'PC',
      quantidade:'2',
      tabelaPreco:'EJ',
      preco:'R$ 350,00',
      percentualDesconto:'0',
      total:'R$ 700,00'
    },
    {
      codigo:'869623',
      descricao:'Light Handle Cover McKesson',
      unidade:'PC',
      quantidade:'1',
      tabelaPreco:'EJ',
      preco:'R$ 1700,00',
      percentualDesconto:'0',
      total:'R$ 1700,00'
    },
];

  ngOnInit() {
  }

  fabClick(){
    this.navCtrl.navigateForward('item-novo');
  }
  editItemClick(){
    this.navCtrl.navigateForward('item-editar');
  }
}
