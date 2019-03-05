import {Component, OnInit } from '@angular/core';
import {PersonaService} from '../../../shared-service/persona.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import {AppGlobals} from "../../../../gobals";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
//import { AuthService } from '../../shared-service/auth.service';

@Component({
    template: '<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>',
    selector : 'app-listpersona',
    templateUrl:'./persona.component.html'
})
export class ListpersonaComponent implements OnInit{
    fechaCaptacion="";
    fechaComparacion="";
    datos;
    global;
    opcionSeleccionado;
    filtroBusqueda="";
    settings = {
      pager: {
        display: true,
        pager:1000,
        perPage: +this.opcionSeleccionado

      },
      actions:
      {
        position:  'right',
        add: true,
        delete: true,
        edit: true,
        custom: [{ name: 'routeToAPage', Router: '/editpaciente',  title: `Ver Mas` }]
      },
      add: {
        inputClass: '',
        addButtonContent: '<i class="nb-plus" type="submit" >Agregar</i>',
        createButtonContent: '<i class="nb-checkmark">Create</i>',
        cancelButtonContent: '<i class="nb-close">Cancel</i>',
        confirmCreate: true,
      },
      edit: {
        inputClass: '',
        editButtonContent: '<i class="nb-edit" type="submit" >Editar</i>',
        createButtonContent: '<i class="nb-checkmark">actualizar</i>',
        cancelButtonContent: '<i class="nb-close">cancelar</i>',
        //confirmEdit:true,
        confirmSave: true,

      },

      delete: {
         deleteButtonContent: '<i class="nb-trash" type="submit" >Eliminar</i>',
         createButtonContent: '<i class="nb-checkmark">save</i>',
         confirmDelete: true,
       },


        columns: {
          persona: {
            title: 'persona',
            editable: false,
          },

          nombre: {
            title: 'nombre',
            valuePrepareFunction: (nombre) => {
              return nombre.toUpperCase()
            }
          },

          apellidos: {
            title: 'apellidos'

          }

        },

      };isAllSelected = true;
      source: LocalDataSource;
  persona: any;


    constructor(private _personaServise:PersonaService, private router: Router , private _global:AppGlobals){
      this.datos = [10,20,30,40];
      this.opcionSeleccionado=10;
      this.cargarDataSource();

    }
    capturar(){
      this.filtroBusqueda = "";
      this.cargarDataSource();

    }

    onEditConfirm(event)
    {

        this._personaServise.getPersona(event.newData.persona).subscribe(data => {
          this.fechaCaptacion = event.newData.fechaModificacion;
          this.fechaComparacion =  data.fechaModificacion;

          if(this.fechaCaptacion==this.fechaComparacion){
            console.log("nuevodatos : " + event.newData.paciente);

              if (window.confirm('Está seguro que desea editar?')){
                      this._personaServise.updatePersona(event.newData).subscribe(data => {
                          this.cargarDataSource();
                        });
                 }

              }else{
                alert("Este dato fue modificado recientemente!!");
              }
          });
    }



  // Function to logout user
  onLogoutClick() {
 //   this.authService.logout(); // Logout user
   // this.flashMessagesService.show('Sesión terminada', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page

  }

    cargarDataSource(){
      console.log("filtro : " + this.filtroBusqueda);

      this._personaServise.getPersonas(+this.opcionSeleccionado,0,this.filtroBusqueda.toUpperCase()).subscribe(persona=>{

        //console.log("persona : "+ this.persona.length);

          this.persona=persona;
          this.persona.length = 10000;


           this.source = new LocalDataSource(this.persona);
           this.source.setPage(1000,true);

          console.log(this.source);

      },(error)=>{
          console.log(error);
      });
    }

    onDeleteConfirm(event): void{
    }

    routeToAPage(event){
          // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
          console.log("id : " + event.data.persona);

          this._global.edicionPaciente= event.data;
       this.router.navigate(['mantenimiento/editpaciente']);
    }

      ngOnInit() {
       /* if(this._global.Registro==1){

        }else{
          this.router.navigate(['..']);
        }*/
    }
}
