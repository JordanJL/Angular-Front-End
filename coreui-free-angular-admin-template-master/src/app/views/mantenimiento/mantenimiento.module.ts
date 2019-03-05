// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { ListpersonaComponent } from './persona/persona.component';


import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
//Edicion Pacientes
import { EditpacienteComponent } from './persona/editpaciente/editpaciente.component';


//GLOBALES
import { AppGlobals } from '../../../gobals';
import { PersonaService } from '../../shared-service/persona.service';
import { ReferenciaComponent } from './referencia/referencia.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MantenimientoRoutingModule,
    Ng2SmartTableModule,
    HttpModule
  ],
  declarations: [
    ListpersonaComponent,
    EditpacienteComponent,
    ReferenciaComponent,
    
    ],
    providers: [PersonaService,AppGlobals]
  })
  export class MantenimientoModule { }
