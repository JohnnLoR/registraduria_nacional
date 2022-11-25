import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuarios } from '../../../modelos/usuarios.model';
import { UsuariosService } from '../../../servicios/usuarios.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuarios: Usuarios[];
  nombresColumnas: string[] = ['ID Usuario', 'Seudonimo', 'e-mail', /*'Contraseña', 'Rol',*/ 'Acciones']

  constructor(private miServicioUsuarios: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioUsuarios.listar().subscribe(data => {
      this.usuarios = data;
    });
  }

  agregar(): void {
    console.log("Agregando Nuevo Usuario")
    this.router.navigate(['pages/usuarios/crear']);
  }

  editar(id: string): void {
    console.log("Editando al Usuario con Id: " + id)
    this.router.navigate(['pages/usuarios/actualizar/' + id]);
  }

  asignarRol(): void {
    console.log("Asignano Rol a Usuario")
    this.router.navigate(['pages/usuarios/asignar-rol']);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Usuario',
      text: '¿Está seguro que desea Eliminar el Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioUsuarios.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El Usuario ha sido Eliminado Exitósamente!!!',
            'success',
          )
          this.ngOnInit();
        });
      }
    })
  }
}
