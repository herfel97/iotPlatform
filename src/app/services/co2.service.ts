import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorCO2 } from '../model/sensorC02';
import { Chart, registerables } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class Co2Service {

  _url = 'http://localhost:8080/nodoCo2/listar?nombreDispositivo=Nodo2'
  constructor (private http: HttpClient){
      Chart.register(...registerables);
  }
  
  getCo2(): Observable<SensorCO2> {
      let header = new HttpHeaders()
      .set('Type-content','aplication/json')
      return this.http.post<SensorCO2>(this._url ,{ 
        headers:header
      });
      
  }
}
