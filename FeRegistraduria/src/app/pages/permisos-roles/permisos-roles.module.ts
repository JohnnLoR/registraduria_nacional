import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRolesRoutingModule } from './permisos-roles-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    PermisosRolesRoutingModule,
    NbCardModule,
    FormsModule,
  ]
})
export class PermisosRolesModule { }
