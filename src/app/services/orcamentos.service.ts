import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { APIAuthenticationToken, APIDefaultParameter } from '../shared-features/api-parametros';
import { environment } from 'src/environments/environment';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrcamentosService {

  constructor(private http: HttpClient) { }

  obterOrcamentos(): Observable<any> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const authenticationToken = new APIAuthenticationToken(environment.Username, environment.Password, environment.EnvironmentName);
    const defaultParameter = new APIDefaultParameter(authenticationToken, Object.assign({}));
    return this.http.post(`${environment.urlAPI}/InterfacedoOrcamentoVendas/ConsultaPorCodigo`,
      defaultParameter, { headers: headersConfig}) .pipe(
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
