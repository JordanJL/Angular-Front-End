import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListpersonaComponent } from './persona/persona.component';
import { EditpacienteComponent } from './persona/editpaciente/editpaciente.component';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { ReferenciaComponent } from './referencia/referencia.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Mantenimiento'
    },
    children: [
      {
        path: 'persona',
        component: ListpersonaComponent,
        data: {
          title: 'Persona'
        }
      },
        {
          path: 'editpaciente',
          component: EditpacienteComponent,
          data: {
            title: 'Pacientes'
          }
       },
       {
         path: 'referencia',
         component: ReferenciaComponent,
         data: {
           title: 'Refencia'
         }
      },
      {
        path: 'antecedentes',
        component: AntecedentesComponent,
        data: {
          title: 'Antecedentes'
        }
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule{}
