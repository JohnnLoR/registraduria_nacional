import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partidos } from '../../../modelos/partidos.model';
import { PartidosService } from '../../../servicios/partidos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  partidos: Partidos[];
  nombresColumnas: string[] = ['_Id', 'Nombre del Partido', 'Lema del Partido', 'Acciones'];

  constructor(private miServicioPartidos: PartidosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioPartidos.listar().subscribe(data => {
      this.partidos=data;
    });
  }

  agregar(): void {
    console.log("Agregando Nuevo Partido!")
    this.router.navigate(['pages/partidos/crear']);
  }

  editar(id: string): void {
    console.log("Editando a " + id)
    this.router.navigate(['pages/partidos/actualizar/' + id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Partido',
      text: '¿Está seguro que desea Eliminar los datos del Partido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar Partido',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPartidos.eliminar(id).subscribe(data => {
          Swal.fire('Eliminado!', 'El Partido ha sido Eliminado Correctamente', 'success')
          this.ngOnInit();
        });
      }
    })
  }
}
