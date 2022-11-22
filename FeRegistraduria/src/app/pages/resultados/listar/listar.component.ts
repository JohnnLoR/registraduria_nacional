import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultados } from '../../../modelos/resultados.model';
import { ResultadosService } from '../../../servicios/resultados.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  resultados: Resultados[];
  nombresColumnas: string[] = ['_Id', 'Candidato', 'Partido', 'Mesa', 'Inscritos', 'Acciones'];

  constructor(private miServicioResultados: ResultadosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioResultados.listar().subscribe(data => {
      this.resultados = data;
    });
  }

  agregar(): void {
    console.log("Agregando Nuevo Resultado")
    this.router.navigate(["pages/resultados/crear"]);
  }

  editar(id:string): void {
    console.log("Editando Resultado: " + id)
    this.router.navigate(['pages/resultados/actualizar/' + id]);
  }

  eliminar(id:string): void{
    Swal.fire({
      title: 'Eliminar Resultado',
      text: '¿Está Seguro que desea Eliminar los Datos del Resultado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioResultados.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!!',
            'Los Datos del Resultado han sido Eliminados Correctamente!!!',
            'success',
          )
          this.ngOnInit();
        });
      }
    })
  }
}
