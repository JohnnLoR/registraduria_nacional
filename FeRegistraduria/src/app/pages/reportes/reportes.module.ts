import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { CandidatosMesaComponent } from './candidatos-mesa/candidatos-mesa.component';
import { CandidatoMesasComponent } from './candidato-mesas/candidato-mesas.component';
import { MaxInscritosComponent } from './max-inscritos/max-inscritos.component';
import { ConteoComponent } from './conteo/conteo.component';
import { GanadorComponent } from './ganador/ganador.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidatosMesaComponent,
    CandidatoMesasComponent,
    MaxInscritosComponent,
    ConteoComponent,
    GanadorComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    NbCardModule,
    FormsModule,
  ]
})
export class ReportesModule { }
