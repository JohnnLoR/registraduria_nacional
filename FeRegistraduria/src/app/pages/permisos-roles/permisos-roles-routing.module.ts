import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear', /* /rol/:id_rol/permiso/:id_permiso */
    component: CrearComponent
  },
  {
    path: 'actualizar/:id_permisoRol', /*/rol/:id_rol/permiso/:id_permiso*/
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRolesRoutingModule { }
