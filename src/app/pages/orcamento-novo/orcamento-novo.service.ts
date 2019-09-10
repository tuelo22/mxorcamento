import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orcamento } from './orcamento';
import { SubjectSubscriber, Subject } from 'rxjs/internal/Subject';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { cloneDeep } from 'lodash';
import { APIAuthenticationToken, APIDefaultParameter } from 'src/app/shared-features/api-parametros';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class OrcamentoService {
    private OrcamentoSubject = new BehaviorSubject<Orcamento>(Object.assign({}));
    public OrcamentoAtual = this.OrcamentoSubject.asObservable();

    constructor(private http: HttpClient,
                private alertController: AlertController) {

    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit(): void {}


    SetCliente(cliente: any) {
        const orcamentoAtual = cloneDeep(this.OrcamentoSubject.getValue()) as Orcamento;
        orcamentoAtual.CodigoCliente = cliente.Codigo;
        orcamentoAtual.DescricaoCliente = cliente.Nome;
        this.OrcamentoSubject.next(orcamentoAtual);
    }

    setEnderecoEntrega(enderecoEntrega: any) {
        const orcamentoAtual = cloneDeep(this.OrcamentoSubject.getValue()) as Orcamento;
        orcamentoAtual.CodigoEnderecoEntrega = enderecoEntrega;
        this.OrcamentoSubject.next(orcamentoAtual);
    }

    setTipoEntrega(tipoEntrega: any) {
        const orcamentoAtual = cloneDeep(this.OrcamentoSubject.getValue()) as Orcamento;
        orcamentoAtual.CodigoTipoEntrega = tipoEntrega;
        this.OrcamentoSubject.next(orcamentoAtual);
    }

    setCondicaoPagamento(condicaoPagamento: any) {
        const orcamentoAtual = cloneDeep(this.OrcamentoSubject.getValue()) as Orcamento;
        orcamentoAtual.CodigoCondicaoPagamento = condicaoPagamento;
        this.OrcamentoSubject.next(orcamentoAtual);
    }

    setItens(itens: any) {
        const orcamentoAtual = cloneDeep(this.OrcamentoSubject.getValue()) as Orcamento;
        orcamentoAtual.ItensOrcamentoVendas = [];
        orcamentoAtual.ItensOrcamentoVendas.push(itens);
        this.OrcamentoSubject.next(orcamentoAtual);
    }

    gravarOrcamento(orcamento: any): Observable<any> {
        const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };

        const authenticationToken = new APIAuthenticationToken(environment.Username, environment.Password, environment.EnvironmentName);
        const defaultParameter = new APIDefaultParameter(authenticationToken, Object.assign(orcamento));
        return this.http.post(`${environment.urlAPI}/InterfacedoOrcamentoVendas/GravarOrcamentoMobile`,
        defaultParameter,  {headers : headersConfig}).pipe(
          tap((data: any) => {
            console.log(JSON.stringify(data));
            this.presentAlert(JSON.stringify(data.Data));
            return data.Data;
          }),
          map(x => x.Data),
          catchError(this.handleError)
        );
    }

   async presentAlert(numeroOrcamento: any) {
    const alert = await this.alertController.create({
      header: 'Notificações',
      subHeader: 'Gravado com sucesso',
      message: numeroOrcamento,
      buttons: ['OK']
    });

    await alert.present();
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
