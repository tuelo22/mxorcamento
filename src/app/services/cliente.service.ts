import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIAuthenticationToken, APIDefaultParameter } from '../shared-features/api-parametros';
import { Observable, throwError } from 'rxjs';
import { of, pipe } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) { }

  obterUsuario(): Observable<any> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const authenticationToken = new APIAuthenticationToken(environment.Username, environment.Password, environment.EnvironmentName);
    const defaultParameter = new APIDefaultParameter(authenticationToken, Object.assign({}));
    return this.http.post(`${environment.urlAPI}/InterfacedoCliente/ConsultarTodos`,
      defaultParameter, { headers: headersConfig}) .pipe(
        tap((data: any) => {
          console.log(JSON.stringify(data));
          return data.Data;
        }),
        map(x => x.Data),
        catchError(this.handleError)
      );
  }

  // getClientes(): Observable<Cliente[]> {
  //   return this.http.get<Cliente[]>(this.ClientesUrl)
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  // createCliente(Cliente: Cliente): Observable<Cliente> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   Cliente.id = null;
  //   return this.http.post<Cliente>(this.ClientesUrl, Cliente, { headers: headers })
  //     .pipe(
  //       tap(data => console.log('createCliente: ' + JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  // deleteCliente(id: number): Observable<{}> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.ClientesUrl}/${id}`;
  //   return this.http.delete<Cliente>(url, { headers: headers })
  //     .pipe(
  //       tap(data => console.log('deleteCliente: ' + id)),
  //       catchError(this.handleError)
  //     );
  // }

  // updateCliente(Cliente: Cliente): Observable<Cliente> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.ClientesUrl}/${Cliente.id}`;
  //   return this.http.put<Cliente>(url, Cliente, { headers: headers })
  //     .pipe(
  //       tap(() => console.log('updateCliente: ' + Cliente.id)),
  //       // Return the Cliente on an update
  //       map(() => Cliente),
  //       catchError(this.handleError)
  //     );
  // }

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
