import {Component, OnInit } from '@angular/core';
import {PersonaService} from '../../../../shared-service/persona.service';
import { Router } from '@angular/router';
import {AppGlobals} from "../../../../../gobals";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
//import { AuthService } from '../../shared-service/auth.service';

@Component({
    selector : 'app-editpaciente',
    templateUrl:'./editpaciente.component.html'
})
export class EditpacienteComponent implements OnInit{
  paciente='';
  profe: any;
  civil: any;
  pais="";
  nuevoTipoDocumento="";
  nuevaProfesion="";
  nuevoNombre="";
  nuevoApellidos="";
  nuevoTipoPaciente="";
  nuevofechaNacimiento="";
  nuevaEdad="";
  nuevoCorreoElectronico="";
  nuevoTelefonoMovil="";
  nuevoTelefonoHabita="";
  nuevoGenero="";
  nuevoPais="";
  nuevaProvincia="";
  nuevoEstadoCivil="";
  nuevaDirección="";
  nuevoNumeroDocumento="";

    constructor( private router: Router , private _global: AppGlobals, private _personaServise:PersonaService){
      if(this._global.edicionPaciente==""){
        this.router.navigate(['mantenimiento/persona']);
      }else{

        console.log(this._global.edicionPaciente);

  /*    this._personaServise.getPersona(this._global.edicionPaciente.persona).subscribe(persona=>{
          this.paciente = persona;  */

          this._personaServise.getProfesiones().subscribe(profesion=>{
              this.profe = profesion;

              this._personaServise.getEstadoCivil().subscribe(civil=>{
                this.civil = civil;

                this._personaServise.getPais().subscribe(pais=>{
                  this.pais = pais;

                },(error)=>{
                  console.log(error);

                });

              },(error)=>{
                console.log(error);

              });

      /*    },(error)=>{
              console.log(error);
          });*/

      },(error)=>{
          console.log(error);
      });
     }
    }


    GuardarEdicion(paciente){

    // Create item object from form fields
    const nuevopaciente = {
      persona: this._global.edicionPaciente,
      tipoDocumento: this.nuevoTipoDocumento, // Title field
      documento: this.nuevoNumeroDocumento,
      pfeProfesion: this.nuevaProfesion,
      nombre: this.nuevoNombre,
      apellidos: this.nuevoApellidos,
      tipoPaciente: this.nuevoTipoPaciente,
      fechaNacimiento :this.nuevofechaNacimiento,
      edad: this.nuevaEdad,
      email: this.nuevoCorreoElectronico,
      telefono1:this.nuevoTelefonoHabita,
      telefono2: this.nuevoTelefonoMovil,
      genero: this.nuevoGenero,
      provincia: this.nuevaProvincia,
      paiPais: this.nuevoPais,
      estadoCivil: this.nuevoEstadoCivil,
      direccion: this.nuevaDirección,
    }


        console.log(this._global.edicionPaciente);

    if (window.confirm('Está seguro que desea editar?')){
      this._personaServise.updatePersona(nuevopaciente).subscribe(data => {

        });
 }
    }



      ngOnInit() {
       /* if(this._global.Registro==1){

        }else{
          this.router.navigate(['..']);
        }*/
    }
}
