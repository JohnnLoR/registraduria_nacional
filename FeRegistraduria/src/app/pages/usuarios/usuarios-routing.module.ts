import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarRolComponent } from './asignar-rol/asignar-rol.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'actualizar/:id_usuario',
    component: CrearComponent
  },
  {
    path: 'asignar-rol',
    component: AsignarRolComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
