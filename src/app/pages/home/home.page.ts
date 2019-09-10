import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private route: ActivatedRoute) {
   }

  barra: number;

  public doughnutChartLabels: string[] = ['Em Aprovação: 2', 'Aprovados: 20', 'Faturados: 30', 'Cancelados: 5'];
  public chartColors: Array<any> = [{backgroundColor: ['#ffce00', '#1d3361', '#145A32', '#f04141']}];
  public doughnutChartData: number[] = [2, 20, 30, 5];
  public doughnutChartType = 'pie';
  public barChartOptions: any = {
    legend: {position: 'bottom', fullWidth: true}
  };

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.barra = queryParams['barra'];
      }
    );

    if (this.barra === 2) {
      this.menu.enable(false);
    } else {
      this.menu.enable(true);
    }
  }

  fabClick() {
    this.navCtrl.navigateForward('orcamento-novo');
  }

  cardClick() {
    this.navCtrl.navigateForward('orcamentos');
  }

  // events
  public chartClicked(e: any): void {

    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
        if ( activePoints.length > 0) {
          this.navCtrl.navigateForward('orcamentos');
        }
       }

    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  orcamentosClick() {
    this.navCtrl.navigateForward('orcamentos');
  }


}
