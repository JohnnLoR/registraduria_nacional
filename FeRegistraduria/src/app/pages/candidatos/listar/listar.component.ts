import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { CandidatosService } from '../../../servicios/candidatos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  candidatos: Candidatos[];
  nombresColumnas: string[] = ['_Id', 'Cedula', 'Nombres', 'Apellidos', 'Número de Resolución', /*'Partido',*/ 'Acciones'];

  constructor(private miServicioCandidatos: CandidatosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      this.candidatos = data;
    });
  }

  agregar(): void {
    console.log("Agregando Nuevo Candidato")
    this.router.navigate(['pages/candidatos/crear']);
  }

  editar(id: string): void {
    console.log("Editanto Candidato: " + id)
    this.router.navigate(['pages/candidatos/actualizar/' + id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Candidato',
      text: '¿Está seguro que desea Eliminar los Datos del Candidato?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioCandidatos.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!!!',
            'Los Datos del Candidato han sido Eliminados Exitósamente!!!',
            'success',
          )
          this.ngOnInit();
        });
      }
    })
  }
}
