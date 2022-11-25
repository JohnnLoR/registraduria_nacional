import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { Partidos } from '../../../modelos/partidos.model';
import { Resultados } from '../../../modelos/resultados.model';
import { ReportesService } from '../../../servicios/reportes.service';

@Component({
  selector: 'ngx-conteo',
  templateUrl: './conteo.component.html',
  styleUrls: ['./conteo.component.scss']
})
export class ConteoComponent implements OnInit {

  resultados: Resultados[];
  nombresColumnas: string[] = ['ID Resultado', 'Nombre', 'Apellido', 'Partido', 'Total Votos Candidato'];
  
  elResultado: Resultados = {
      Total_votos_candidato: 0,
      _id: "",
      doc: {
          _id: "",
          candidato: {              
              nombre: "",
              apellido: "",
              partido: {
                  nombre: "",
              }
          }
      }
  }

  constructor(private miServicioReportes: ReportesService) { }

  ngOnInit(): void {
    this.conteo();
  }

  conteo(): void {
    this.miServicioReportes.conteo().subscribe(data => {
      this.resultados = data;
      console.log(this.resultados)
    });
  }
}