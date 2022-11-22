import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisosRoles } from '../../../modelos/permisos-roles.model';
import { PermisosRolesService } from '../../../servicios/permisos-roles.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  permisoRol: PermisosRoles[];
  nombresColumnas: string[] = ['_Id', 'Rol', 'URL Permiso', 'Método', 'Acciones']

  constructor(private miServicioPermisoRol: PermisosRolesService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioPermisoRol.listar().subscribe(data => {
      this.permisoRol = data;
    });
  }

  agregar(): void {  /* id_rol: string, id_permiso */
    console.log("Agregando Nuevo PermisoRol")
    this.router.navigate(['pages/permisos-roles/crear'])  /* /rol/' + id_rol + '/permiso/' + id_permiso */
  }

  editar(id: string): void { /*, id_rol: string, id_permiso: string*/
    console.log("Editando el PermisoRol: " + id)
    this.router.navigate(['pages/permisos-roles/actualizar/' + id]); /*+ '/rol/' + id_rol + '/permiso/' + id_permiso*/
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Permiso!',
      text: '¿Está Seguro que Desea Eliminar el PermisoRol?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
    }).then((result) =>  {
      if (result.isConfirmed) {
        this.miServicioPermisoRol.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El PermisoRol ha sido Eliminado Exitósamente',
            'success',
          )
          this.ngOnInit();
        });
      }
    })
  }
}
