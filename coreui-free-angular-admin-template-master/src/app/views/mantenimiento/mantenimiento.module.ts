// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Persona

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { PersonaService } from '../../shared-service/persona.service';
import { ListpersonaComponent } from './persona/persona.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

//Edicion Pacientes
import { EditpacienteComponent } from './persona/editpaciente/editpaciente.component'


//GLOBALES
import { AppGlobals } from '../../../gobals';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MantenimientoRoutingModule
  ],
  declarations: [
    ListpersonaComponent
    EditpacienteComponent


  ],
  providers: [PersonaService,AppGlobals]
})
export class MantenimientoModule { }
