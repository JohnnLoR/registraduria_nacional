import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permisos } from '../../../modelos/permisos.model';
import { PermisosService } from '../../../servicios/permisos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_permiso: string = '';
  intentoEnvio: boolean = false;
  elPermiso: Permisos = {
    url: '',
    metodo: '',
  }

  constructor(private miServicioPermisos: PermisosService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_permiso) {
      this.modoCreacion = false;
      this.id_permiso = this.rutaActiva.snapshot.params.id_permiso;
      this.getPermiso(this.id_permiso)
    } else {
      this.modoCreacion = true;
    }
  }

  getPermiso(id: string) {
    this.miServicioPermisos.getPermiso(id).subscribe(data => {
      this.elPermiso = data;
    });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPermisos.crear(this.elPermiso).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El Permiso ha sido Creado Exitósamente!!!',
          'success'
        )
        this.router.navigate(['pages/permisos/listar']);
      });
    }
  }

  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioPermisos.editar(this.elPermiso._id, this.elPermiso).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El Permiso ha sido Actualizado Exitósamente!!!',
          'success',
        )
        this.router.navigate(['pages/permisos/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elPermiso.url == '' ||
        this.elPermiso.metodo == '') {
          return false;
        } else {
          return true;
        }
  }
}
