import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
import { MatDialog } from "@angular/material/dialog"
import { ServWSService } from 'src/app/services/serv-ws.service';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  title = 'app1';

  displayedColumns: string[] = ['code', 'name', 'phone', 'email', 'action'];
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
    console.log(this.empdata);
  });
}


getrow(row: any) {
  //console.log(row);
}

FunctionEdit(code: any) {
  this.OpenDialog('1000ms','600ms',code)
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
