import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AsignarRolComponent } from './asignar-rol/asignar-rol.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    AsignarRolComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NbCardModule,
    FormsModule,
  ]
})
export class UsuariosModule { }
