import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { GraficasComponent } from './graficas/graficas.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartSectionComponent } from './chart-section/chart-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSocketService } from './custom-socket.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ManagementDevicesComponent } from './management-devices/management-devices.component';
import { LoginComponent } from './login/login.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    ModalpopupComponent,
    GraficasComponent,
    ChartSectionComponent,
    ManagementDevicesComponent,
    LoginComponent
  ],
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    CommonModule,
    RouterModule,
    SharedModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    FormsModule
    
  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent
  ]
})
export class PagesModule { }
