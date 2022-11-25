import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisosRoles } from '../../../modelos/permisos-roles.model';
import { PermisosRolesService } from '../../../servicios/permisos-roles.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_permisoRol: string = '';
  intentoEnvio: boolean = false;
  elPermisoRol: PermisosRoles = {
    rol: '',
    permiso: '',
  }

  constructor(private miServicioPermisosRoles: PermisosRolesService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_permisoRol) {
      this.modoCreacion = false;
      this.id_permisoRol = this.rutaActiva.snapshot.params.id_permisoRol;
      this.getPermisoRol(this.id_permisoRol)
    } else {
      this.modoCreacion = true;
    }
  }

  getPermisoRol(id: string) {
    this.miServicioPermisosRoles.getPermisoRol(id).subscribe(data => {
      this.elPermisoRol = data;
    });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPermisosRoles.crear(this.elPermisoRol.rol, this.elPermisoRol.permiso, this.elPermisoRol).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El Permiso Rol ha sido Creado Exitósamente!!!',
          'success',
        )
        this.router.navigate(['pages/permisos-roles/listar']);
      });
    }
  }

  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioPermisosRoles.editar(this.elPermisoRol._id, this.elPermisoRol.rol, this.elPermisoRol.permiso, this.elPermisoRol).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El PermisoRol ha sido Actualizado Exitósamente!!!',
          'success',
        )
        this.router.navigate(['pages/permisos-roles/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elPermisoRol.rol == '' ||
        this.elPermisoRol.permiso == '') {
          return false;
        } else {
          return true;
        }
  }

}
