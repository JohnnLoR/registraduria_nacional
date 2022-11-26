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
  nombresColumnas: string[] = ['_Id', 'Cedula', 'Nombres', 'Apellidos', 'Número de Resolución', 'Partido', 'Acciones'];

  constructor(private miServicioCandidatos: CandidatosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      this.candidatos = data;      
      for(let candidato in this.candidatos) {  /* For que permite listar los candidatos con sus partidos y que no se interrumpa el for del template por falta o nulidad de un registro de partido o asignación de partido al candidato */
        if (this.candidatos[candidato]["partido"] == null) {
          // console.log(this.candidatos[candidato]);
          this.candidatos[candidato]["partido"] = "Sin Partido";
        }
      }
      // console.log(this.candidatos);
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

  asignarPartido(): void {
    console.log("Asignando Partido a Candidato")
    this.router.navigate(['pages/candidatos/asignar-partido/']);
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
