

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
     /* if(this._global.edicionPaciente==""){
        this.router.navigate(['base/persona']);
      }else{*/
        
        console.log(this._global.edicionPaciente);
      
      this._personaServise.getPersona(+this._global.edicionPaciente.persona).subscribe(persona=>{
          this.paciente = persona;     
        },(error)=>{
          console.log(error);
      });
          this._personaServise.getProfesiones().subscribe(profesion=>{
              this.profe = profesion;

              this._personaServise.getEstadoCivil().subscribe(civil=>{
                this.civil = civil;

                this._personaServise.getPais().subscribe(pais=>{
                  this.pais = pais;
                  
                },(error)=>{
                  console.log(error);
                  
                })

              },(error)=>{
                console.log(error);
                
              })

          },(error)=>{
              console.log(error);
          });
               
  
     }
   // }

    
    GuardarEdicion(paciente){

    /* Create item object from form fields
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
      sexo: this.nuevoGenero,
      provincia: this.nuevaProvincia,
      paiPais: this.nuevoPais,
      estadoCivil: this.nuevoEstadoCivil,
      direccion: this.nuevaDirección
      
    }
*/
if(this.nuevoTipoDocumento!=""){
  this._global.edicionPaciente.tipoDocumento =this.nuevoTipoDocumento;
}else if(this.nuevoNumeroDocumento!=""){
  this._global.edicionPaciente.documento= this.nuevoNumeroDocumento;
}else if(this.nuevaProfesion!=""){
  this._global.edicionPaciente.pfeProfesion = this.nuevaProfesion;
}else if(this.nuevoNombre!=""){
  this._global.edicionPaciente.nombre = this.nuevoNombre;
}else if(this.nuevoApellidos!=""){
  this._global.edicionPaciente.apellidos =this.nuevoApellidos;
}else if(this.nuevoTipoPaciente!=""){
  this._global.edicionPaciente.paciente =this.nuevoTipoPaciente;
}else if(this.nuevofechaNacimiento!=""){
  this._global.edicionPaciente.fechaNacimiento = this.nuevofechaNacimiento;
}else if(this.nuevoCorreoElectronico!=""){
  this._global.edicionPaciente.email= this.nuevoCorreoElectronico;
}else if(this.nuevoTelefonoHabita!=""){
  this._global.edicionPaciente.telefono1=+this.nuevoTelefonoHabita;
}else if(this.nuevoTelefonoMovil!=""){
  this._global.edicionPaciente.telefono2= +this.nuevoTelefonoMovil;
}else if(this.nuevoGenero!=""){
  this._global.edicionPaciente.sexo = this.nuevoGenero;
}else if(this.nuevaProvincia!=""){
  this._global.edicionPaciente.provincia= this.nuevaProvincia;
}else if(this.nuevoPais!=""){
  this._global.edicionPaciente.paiPais= this.nuevoPais;
}else if(this.nuevoEstadoCivil!=""){
  this._global.edicionPaciente.estadoCivil = this.nuevoEstadoCivil;
}else if(this.nuevaDirección!=""){
  this._global.edicionPaciente.direccion= this.nuevaDirección;
}


        console.log(this._global.edicionPaciente);
    if (window.confirm('Está seguro que desea editar?')){
      this._personaServise.updatePersona(this._global.edicionPaciente).subscribe(data => {
          
        });
      }   
}

AgregarEdicion(persona){
  if(this.nuevoTipoDocumento!=""){
    console.log("tipo D : "+this.nuevoTipoDocumento);
    
    this._global.edicionPaciente.tipoDocumento =this.nuevoTipoDocumento;

  }else if(this.nuevoNumeroDocumento!=""){
    console.log("nuevoNumeroDocumento: "+this.nuevoNumeroDocumento);
    this._global.edicionPaciente.documento= this.nuevoNumeroDocumento;

  }else if(this.nuevaProfesion!=""){
    console.log("nuevaProfesion : "+this.nuevaProfesion);
    this._global.edicionPaciente.pfeProfesion = this.nuevaProfesion;

  }else if(this.nuevoNombre!=""){
    console.log("nuevoNombre : "+this.nuevoNombre);
    this._global.edicionPaciente.nombre = this.nuevoNombre;

  }else if(this.nuevoApellidos!=""){
    console.log("nuevoApellidos : "+this.nuevoApellidos);
    this._global.edicionPaciente.apellidos =this.nuevoApellidos;
    
  }else if(this.nuevoTipoPaciente!=""){
    console.log("nuevoTipoPaciente : "+this.nuevoTipoPaciente);
    this._global.edicionPaciente.paciente =this.nuevoTipoPaciente;

  }else if(this.nuevofechaNacimiento!=""){
    console.log("nuevofechaNacimiento : "+this.nuevofechaNacimiento);
    this._global.edicionPaciente.fechaNacimiento = this.nuevofechaNacimiento;

  }else if(this.nuevoCorreoElectronico!=""){
    console.log("nuevoCorreoElectronico : "+this.nuevoCorreoElectronico);
    this._global.edicionPaciente.email= this.nuevoCorreoElectronico;

  }else if(this.nuevoTelefonoHabita!=""){
    console.log("nuevoTelefonoHabita : "+this.nuevoTelefonoHabita);
    this._global.edicionPaciente.telefono1=+this.nuevoTelefonoHabita;

  }else if(this.nuevoTelefonoMovil!=""){
    console.log("nuevoTelefonoMovil : "+this.nuevoTelefonoMovil);
    this._global.edicionPaciente.telefono2= +this.nuevoTelefonoMovil;

  }else if(this.nuevoGenero!=""){
    console.log("nuevoGenero : "+this.nuevoGenero);
    this._global.edicionPaciente.sexo = this.nuevoGenero;

  }else if(this.nuevaProvincia!=""){
    console.log("nuevaProvincia : "+this.nuevaProvincia);
    this._global.edicionPaciente.provincia= this.nuevaProvincia;

  }else if(this.nuevoPais!=""){
    console.log("nuevoPais : "+this.nuevoPais);
    this._global.edicionPaciente.paiPais= this.nuevoPais;

  }else if(this.nuevoEstadoCivil!=""){
    console.log("nuevoEstadoCivil : "+this.nuevoEstadoCivil);
    this._global.edicionPaciente.estadoCivil = this.nuevoEstadoCivil;

  }else if(this.nuevaDirección!=""){
    console.log("nuevaDirección : "+this.nuevaDirección);
    this._global.edicionPaciente.direccion= this.nuevaDirección;

  }



    this._personaServise.createPersona(this._global.edicionPaciente).subscribe(data => {
    this.router.navigate(['base/persona']);
  });

}

   


      ngOnInit() {
       /* if(this._global.Registro==1){

        }else{
          this.router.navigate(['..']);
        }*/
    }
}



