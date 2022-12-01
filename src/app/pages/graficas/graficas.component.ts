import { Component } from '@angular/core';
import { SensorCO2 } from 'src/app/model/sensorC02';
import { Co2Service } from 'src/app/services/co2.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {
  public sensor: SensorCO2 = {id: "", deviceName: "", fecha: "", Co2_A: "",Co2_B:"" }

  public medidas: Array<SensorCO2> =[]

  medidasC02 : any
  nodoName : any
  chart: any = [];

  public constructor(private co2service: Co2Service) {
      this.co2service.getCo2().subscribe((resp:any) => {
         this.medidas = resp; 
         this.medidasC02 = this.medidas.map(x => x.Co2_A);
         this.nodoName = this.medidas.map(x => x.fecha);

          this.chart = new Chart('canvas',{
              type: "line",
              data: { 
                  labels: this.nodoName,
                  datasets:[
                      {
                          data:this.medidasC02,
                          borderColor: '#3e95cd',
                          fill: false,
                          label: 'Nodo 2',
                          backgroundColor: 'rgba(93, 175, 89, 0.1)',
                          borderWidth: 3,
                      },
                      {
                          data:this.medidasC02,
                          borderColor: '#3ffff',
                          fill: false,
                          label: 'Nodo 3',
                          backgroundColor: 'rgba(93, 175, 89, 0.1)',
                          borderWidth: 3,
                      },
                  ],
                  
              },
          });
      });
  }
}
