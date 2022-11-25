import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { Resultados } from '../../../modelos/resultados.model';
import { CandidatosService } from '../../../servicios/candidatos.service';
import { ReportesService } from '../../../servicios/reportes.service';

@Component({
  selector: 'ngx-candidato-mesas',
  templateUrl: './candidato-mesas.component.html',
  styleUrls: ['./candidato-mesas.component.scss']
})
export class CandidatoMesasComponent implements OnInit {

  candidatos: Candidatos[];
  elCandidato: Candidatos = {
    _id: '',
    nombre: '',
    apellido: '',
  }

  id_candidato: string = '';
  resultados: Resultados[];
  nombresColumnas: string[] = ['ID Resultado', 'Nombre', 'Apellido', 'Partido', 'Mesa'];
  elResultado: Resultados = {
    _id: '',
    candidato: '',
    nombre: '',
    apellido: '',
    partido: '',
    mesa: '',
  }

  constructor(private miServicioReportes: ReportesService,
              private miServicioCandidatos: CandidatosService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  candidatoMesas(id_candidato: string): void {
    this.miServicioReportes.candidatoMesas(id_candidato).subscribe(data => {
      this.resultados = data;
      console.log(this.resultados)
    })
  }

  listar(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      this.candidatos = data;
      console.log(this.candidatos)
    });
  }

}
