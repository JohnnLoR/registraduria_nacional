import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { Resultados } from '../../../modelos/resultados.model';
import { MesasService } from '../../../servicios/mesas.service';
import { ReportesService } from '../../../servicios/reportes.service';

@Component({
  selector: 'ngx-candidatos-mesa',
  templateUrl: './candidatos-mesa.component.html',
  styleUrls: ['./candidatos-mesa.component.scss']
})
export class CandidatosMesaComponent implements OnInit {

  mesas: Mesas[];
  laMesa: Mesas = {
    _id: '',
    numero: 0,
  }

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
              private miServicioMesas: MesasService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.listarMesas();
  }

  candidatosMesa(id_mesa: string): void {
    this.miServicioReportes.candidatosMesa(id_mesa).subscribe(data => {
      this.resultados = data;
    })
  }

  listarMesas(): void {
    this.miServicioMesas.listar().subscribe(data => {
      this.mesas = data;
      // console.log(this.mesas)
    });
  }

}
