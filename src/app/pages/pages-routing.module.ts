import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ChartSectionComponent } from './chart-section/chart-section.component';
import { ManagementDevicesComponent } from './management-devices/management-devices.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent}, 
    {path:'usuarios', component:UsuariosComponent},
    {path:'productos', component:ProductosComponent},
    {path:'graficas', component:GraficasComponent},
    {path:'graf',component:ChartSectionComponent},
    {path:'devices',component:ManagementDevicesComponent}
  ]
},
{path:'login', component: LoginComponent}
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
