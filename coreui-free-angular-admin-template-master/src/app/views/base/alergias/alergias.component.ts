import { Component, OnInit } from '@angular/core';
import {AlergiasService} from '../../../shared-service/alergias.service';
//import {Alergias} from '../alergia';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  template: '<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>',
  selector: 'app-alergias',
  templateUrl: './alergias.component.html'
})
export class AlergiasComponent implements OnInit {

  fechaCaptacion="";
  fechaComparacion="";

  settings = {
    actions:
    {
      add: true,
      delete: true,
      edit: true
    },
    add: {
      inputClass: '',
      addButtonContent: '<i class="btn btn-outline-primary" type="submit" >Agregar</i>',
      createButtonContent: '<i class="nb-checkmark">Crear</i>',
      cancelButtonContent: '<i class="nb-close"> Cancelar</i>',
      confirmCreate: true,
    },
    edit: {
      inputClass: '',
      editButtonContent: '<i class="btn btn-outline-primary" type="submit" >Editar</i>',
      createButtonContent: '<i class="nb-checkmark">actualizar</i>',
      cancelButtonContent: '<i class="nb-close">  Cancelar</i>',
      confirmEdit:true,
      confirmSave: true,

    },

    delete: {
       deleteButtonContent: '<i class="btn btn-outline-primary" type="submit" >Eliminar</i>',
       createButtonContent: '<i class="nb-checkmark">Guardar</i>',
       confirmDelete: true,
     },

    columns: {
      id: {
        title: 'id'
      },

      empresa: {
        title: 'empresa'

      },

      descripcion: {
        title: 'descripcion'

      }

    },
  };isAllSelected = true;
  source: LocalDataSource;
  //private alergia: Alergias[];
  

  constructor(private _alergiasService:AlergiasService, private router: Router){
    this.cargarDataSource();
    
}
  ngOnInit() {
  }

  cargarDataSource(){
    this._alergiasService.getAlergias().subscribe((alergias)=>{
      console.log(alergias.alergia);
     // this.alergia=alergias;
     // this.source = new LocalDataSource(this.alergia);
      console.log(this.source);
      
  },(error)=>{
      console.log(error);
  });

  }

  onEditConfirm(event)
{
    
  this._alergiasService.getAlergia(event.newData.id).subscribe(data => {  

    if(event.newData.fechaModificacion==data.fechaModificacion){
      
      if (window.confirm('Está seguro que desea editar?'))
      { 
        this._alergiasService.updateAlergia(event.newData).subscribe(data => {
        this.cargarDataSource(); 
      });

      }
    }else{
        alert("Este dato fue modificado recientemente!!");
    } 
      });
}

}