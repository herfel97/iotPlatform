import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject, tap } from 'rxjs';
import { ResponseI } from '../model/response.interface';
import { restauranteI } from '../model/restaurant.interface';
import { clienteI } from "../model/cliente.interface";
import { reservaI } from '../model/reservaI.interface';
import { Sensorco2 } from '../model/sensorco2';

@Injectable({
  providedIn: 'root'
})
export class ServWSService {
  postId:any;
  errorMessage:any;

  constructor(private http:HttpClient) { }


  apiurl = 'http://52.55.68.3:44269/usuarios';
  private _refreshrequired=new Subject<void>();

  get RequiredRefresh(){
    return this._refreshrequired;
  }


getRestaurantes (){
  return this.http.get('http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/restaurant/list')
}

getNodos(): Observable<Sensorco2> {
  return this.http.get<Sensorco2>("http://ec2-34-226-245-121.compute-1.amazonaws.com:8080/nodoCo2/listar?nombreDispositivo=Nodo2");
}

registrarRestaurant(form:restauranteI): Observable<any>{
  const body = new HttpParams()
  .set('nombre', form.nombre.toUpperCase())
  .set('direccion', form.direccion.toUpperCase())
  .set('telefono', form.telefono.toUpperCase()) 
  .set('aforo', form.aforo); 

  let url = 'http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/restaurant/registrar';
  return this.http.post<ResponseI>(url, body.toString(),  {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  }
);
}

getClientes(): Observable<any>{
  return this.http.get<any>('http://54.174.96.26:8090/api/usuarios/usuarios');
}

GetUserbycode(code:any){
  return this.http.get('http://52.55.68.3:44269/usuarios/'+code);
}

registrarCliente(form:clienteI): Observable<any>{
  const body = new HttpParams()
  .set('nombre', form.nombre.toUpperCase())
  .set('cedula', form.cedula)
  .set('correo', form.correo) 
  .set('telefono', form.telefono); 

  let url = 'http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/clientes/registrar';
  return this.http.post<ResponseI>(url, body.toString(),  {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  }
);
}

Save(inputdata:any){
  return this.http.post(this.apiurl,inputdata).pipe(
    tap(()=>{
this.RequiredRefresh.next();
    })
  );
}

buscarCliente(cedula:any):Observable<any>{
return this.http.get<clienteI>('http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/clientes/buscar/'+cedula);
}

buscarRestaurante(nombre:any):Observable<any> {
return this.http.get<restauranteI>('http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/restaurant/buscar/'+nombre);
}

  listarReservasPorCedula(cedula:any):Observable<any>{
    return this.http.get<reservaI>('http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/reserva/list/'+cedula);
  }

  listarReservasPorRestaurant(nombre:any):Observable<any>{
    return this.http.get<reservaI>('http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/reserva/listar/'+nombre);
  }

  registrarReserva(cedula:any,restaurant:any,asistentes:any,fecha:any,hora:any):Observable<any>{
    const body = new HttpParams()
    .set('cedulaCliente', cedula)
    .set('nombreRestaurant', restaurant)
    .set('asistentes', asistentes) 
    .set('fecha', fecha)
    .set('hora', hora);

    let url = 'http://localhost:8080/MorochoArevalo-Hernan-Examen/rest/reserva/registrar';
    return this.http.post<ResponseI>(url, body.toString(),  {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });

  }


}
