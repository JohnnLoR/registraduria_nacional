import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoMesasComponent } from './candidato-mesas/candidato-mesas.component';
import { CandidatosMesaComponent } from './candidatos-mesa/candidatos-mesa.component';
import { ConteoComponent } from './conteo/conteo.component';
import { GanadorComponent } from './ganador/ganador.component';
import { MaxInscritosComponent } from './max-inscritos/max-inscritos.component';

const routes: Routes = [
  {
    path: 'max-inscritos',
    component: MaxInscritosComponent
  },
  {
    path: 'candidato-mesas',
    component: CandidatoMesasComponent
  },
  {
    path: 'candidatos-mesa',
    component: CandidatosMesaComponent
  },
  {
    path: 'conteo',
    component: ConteoComponent
  },
  {
    path: 'ganador',
    component: GanadorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
