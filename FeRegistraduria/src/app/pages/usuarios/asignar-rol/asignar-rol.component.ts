import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Roles } from '../../../modelos/roles.model';
import { Usuarios } from '../../../modelos/usuarios.model';
import { RolesService } from '../../../servicios/roles.service';
import { UsuariosService } from '../../../servicios/usuarios.service';

@Component({
  selector: 'ngx-asignar-rol',
  templateUrl: './asignar-rol.component.html',
  styleUrls: ['./asignar-rol.component.scss']
})
export class AsignarRolComponent implements OnInit {

  roles: Roles[];
  elRol: Roles = {
    _id: '',
    nombre: '',
  }

  usuarios: Usuarios[];
  id_usuario: string = '';
  intentoEnvio: boolean = false;
  elUsuario: Usuarios = {
    _id: '',
    seudonimo: '',
    rol: '',
  }

  constructor(private miServicioUsuarios: UsuariosService,
              private miServicioRoles: RolesService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_usuario) {
      this.id_usuario = this.rutaActiva.snapshot.params.id_usuario;
    }

    this.listarUsuarios();
    this.listarRoles();
  }

  asignarRol(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioUsuarios.asignarRol(this.elUsuario._id, this.elUsuario.rol, this.elUsuario).subscribe(data => {
        Swal.fire(
          'Asignado!',
          'Se le ha Asignado un Rol al Usuario Exitósamente',
          'success',
        )
        this.router.navigate(['pages/usuarios/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elUsuario._id == '' ||
        this.elUsuario.rol == '') {
          return false;
        } else {
          return true;
        }
  }

  listarUsuarios(): void {
    this.miServicioUsuarios.listar().subscribe(data => {
      this.usuarios = data;
      // console.log(this.usuarios)
    });
  }

  listarRoles(): void {
    this.miServicioRoles.listar().subscribe(data => {
      this.roles = data;
      // console.log(this.roles)
    });
  }
}
