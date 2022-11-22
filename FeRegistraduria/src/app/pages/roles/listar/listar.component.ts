import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Roles } from '../../../modelos/roles.model';
import { RolesService } from '../../../servicios/roles.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  roles: Roles[];
  nombresColumnas: string[] = ['_Id', 'Rol', 'Descripcion', 'Acciones']

  constructor(private miServicioRoles: RolesService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioRoles.listar().subscribe(data => {
      this.roles = data;
    });
  }

  agregar(): void {
    console.log("Agregando Rol")
    this.router.navigate(['pages/roles/crear']);
  }

  editar(id: string): void {
    console.log("Editnado el Rol: " + id)
    this.router.navigate(['pages/roles/actualizar/' + id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Rol',
      text: '¿Está Seguro que desea eliminar el Rol?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioRoles.eliminar(id).subscribe(data => {        
          Swal.fire(
            'Eliminado!',
            'El Rol ha sido Eliminado Exitósamente!!!',
            'success',
          )
          this.ngOnInit();      
        });
      }
    })
  }
}
