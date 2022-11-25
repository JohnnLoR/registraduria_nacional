import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuarios } from '../../../modelos/usuarios.model';
import { UsuariosService } from '../../../servicios/usuarios.service';

@Component({
  selector: 'ngx-asignar-rol',
  templateUrl: './asignar-rol.component.html',
  styleUrls: ['./asignar-rol.component.scss']
})
export class AsignarRolComponent implements OnInit {

  id_usuario: string = '';
  intentoEnvio: boolean = false;
  elUsuario: Usuarios = {
    _id: '',
    rol: '',
  }

  constructor(private miServicioUsuarios: UsuariosService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_usuario) {
      this.id_usuario = this.rutaActiva.snapshot.params.id_usuario;
    }
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
}
