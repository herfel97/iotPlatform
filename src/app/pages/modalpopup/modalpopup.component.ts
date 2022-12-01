import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServWSService } from '../../services/serv-ws.service';
//import * as alertify from 'alertify'
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss']
})
export class ModalpopupComponent implements OnInit {

  constructor(private service: ServWSService,
              public dialogref: MatDialogRef<ModalpopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  desdata: any;
  respdata: any;
  editdata: any;

  ngOnInit(): void {
    this.loadDes();
    if(this.data.empcode!=null && this.data.empcode!=''){
this.LoadEditData(this.data.empcode);
    }
  }

  loadDes() {
    //this.service.GetDes().subscribe(result => {
    //  this.desdata = result;
    //});
  }

  LoadEditData(code: any) {
   this.service.GetUserbycode(code).subscribe(item => {
        this.editdata = item;
        this.Reactiveform.setValue({id:this.editdata.id,name:this.editdata.nombre,email:this.editdata.email,
         username:this.editdata.username,clave:this.editdata.password,rol:this.editdata.roles[0].nombre
        })
    });
  console.log(this.editdata);
  }

  Reactiveform = new FormGroup({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    clave: new FormControl("", Validators.required),
    rol: new FormControl("")
  });

  SaveEmployee() {
    if (this.Reactiveform.valid) {
      this.service.Save(this.Reactiveform.value.name).subscribe(result => {
        this.respdata = result;
        if (this.respdata.result == 'pass') {
         // alertify.success("saved successfully.")
          this.dialogref.close();
        }
     });
     console.log(this.respdata);
    } else {
      //alertify.error("Please Enter valid data")
    }
  }

}
