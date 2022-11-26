import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permisos } from '../../../modelos/permisos.model';
import { PermisosService } from '../../../servicios/permisos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  permisos: Permisos[];
  nombresColumnas: string[] = ['_Id', 'URL', 'Método', 'Acciones']

  constructor(private miServicioPermisos: PermisosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioPermisos.listar().subscribe(data => {
      this.permisos = data;
    });
  }

  agregar(): void {
    console.log("Agregando Nuevo Permiso")
    this.router.navigate(['pages/permisos/crear']);
  }

  editar(id: string): void {
    console.log("Editando Permiso: " + id)
    this.router.navigate(['pages/permisos/actualizar/' + id])
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: '¿Está Seguro que Desea Eliminar el Permiso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermisos.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El Permiso ha sido Eliminado Exitósamente',
            'success',
          )
          this.ngOnInit();
        });
      }
    })
  }
}
