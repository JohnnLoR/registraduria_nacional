import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { MesasService } from '../../../servicios/mesas.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {

  mesas : Mesas[];
  nombresColumnas: string[] = ['_Id', 'Número Mesa', 'Cantidad Inscrritos', 'Acciones'];

  constructor(private miServicioMesas: MesasService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioMesas.listar().subscribe(data => {
      this.mesas = data;
    });
  }

  agregar(): void {
    console.log('Agregando Nueva Mesa')
    this.router.navigate(['pages/mesas/crear']);
  }

  editar(id: string): void {
    console.log('Editando a: ' + id)
    this.router.navigate(['pages/mesas/actualizar/' + id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Mesa',
      text: '¿Está seguro que desea eliminar la Mesa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:  'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesas.eliminar(id).subscribe(data => {
          Swal.fire('Eliminada!!!', 'La Mesa ha sido Eliminada Exitósamente!!!', 'success')
          this.ngOnInit();
        });
      }
    })
  }
}
