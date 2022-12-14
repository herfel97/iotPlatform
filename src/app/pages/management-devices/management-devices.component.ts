import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
import { MatDialog } from "@angular/material/dialog"
import { ServWSService } from 'src/app/services/serv-ws.service';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-management-devices',
  templateUrl: './management-devices.component.html',
  styleUrls: ['./management-devices.component.css']
})
export class ManagementDevicesComponent {

  title = 'app1';

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'username', 'action'];
  dataSource: any;
  empdata: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service:ServWSService, private dialog: MatDialog) {}

  public clientes:any = [];
  
  ngOnInit() { 
    this.GetAll();
    
}

GetAll() {
  this.service.getClientes().subscribe(result => {
    this.empdata = result._embedded.usuarios;
    this.dataSource = new MatTableDataSource<any>(this.empdata)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}


getrow(row: any) {
  //console.log(row);
}

FunctionEdit(code: any) {
  this.OpenDialog('1000ms','600ms',code)
}

Filterchange(event: Event) {
  const filvalue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filvalue;
}

FunctionDelete(code: any) {
 // alertify.confirm("Remove Employee","Do you want to remove?",()=>{
    //this.service.Remove(code).subscribe(result => {
      //this.GetAll();
     // alertify.success("Removed successfully.")
   // });

 // },function(){

//  })
  
}

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:code
      }
    })
  }

}

