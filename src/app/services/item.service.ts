import { HttpClient } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { Injectable } from '@angular/core';
import { Item } from '../pages/item/item';
import { BehaviorSubject, Observable, throwError, empty } from 'rxjs';
import { APIAuthenticationToken, APIDefaultParameter } from '../shared-features/api-parametros';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private ItemSubject = new BehaviorSubject<Item>(Object.assign({}));
  public ItemAtual = this.ItemSubject.asObservable();

  constructor(private http: HttpClient) { }

  SetItem(item: any) {
    const ItemAtual = cloneDeep(this.ItemSubject.getValue()) as Item;
    ItemAtual.Codigo = item.CodigoItem;
    ItemAtual.Descricao = item.Descricao;
    ItemAtual.Unidade = item.CodigoUnidade;
    ItemAtual.TabelaPreco = item.CodigoTabelaPreco = null ? '' : item.CodigoTabelaPreco;
    ItemAtual.DescricaoTabelaPreco = item.DescricaoTabelaPreco = null ? '' : item.DescricaoTabelaPreco;
    ItemAtual.Preco = item.Preco;
    ItemAtual.Desconto = item.Desconto;
    this.ItemSubject.next(ItemAtual);
}

  obterItens(): Observable<any> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const authenticationToken = new APIAuthenticationToken(environment.Username, environment.Password, environment.EnvironmentName);
    const defaultParameter = new APIDefaultParameter(authenticationToken, Object.assign({}));
    return this.http.post(`${environment.urlAPI}/InterfacedoProduto/ConsultaProdutos`,
    defaultParameter, {headers : headersConfig}).pipe(
      tap((data: any) => {
        console.log(JSON.stringify(data));
        return data.Data;
      }),
      map(x => x.Data),
      catchError(this.handleError)
    );

  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

