import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultados } from '../../../modelos/resultados.model';
import { ReportesService } from '../../../servicios/reportes.service';

@Component({
  selector: 'ngx-candidatos-mesa',
  templateUrl: './candidatos-mesa.component.html',
  styleUrls: ['./candidatos-mesa.component.scss']
})
export class CandidatosMesaComponent implements OnInit {

  id_mesa: string = '';
  resultados: Resultados[];
  nombresColumnas: string[] = ['ID Resultado', 'Nombre', 'Apellido', 'Partido', 'Mesa']
  elResultado: Resultados = {
    _id: '',
    candidato: '',
    nombre: '',
    apellido: '',
    partido: '',
    mesa: '',    
  }

  constructor(private miServicioReportes: ReportesService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  candidatosMesa(id_mesa: string): void {
    this.miServicioReportes.candidatosMesa(id_mesa).subscribe(data => {
      this.resultados = data;
    })
  }

}
