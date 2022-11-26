import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { Partidos } from '../../../modelos/partidos.model';
import { Resultados } from '../../../modelos/resultados.model';
import { ReportesService } from '../../../servicios/reportes.service';

@Component({
  selector: 'ngx-ganador',
  templateUrl: './ganador.component.html',
  styleUrls: ['./ganador.component.scss']
})
export class GanadorComponent implements OnInit {

  resultados: Resultados[];
  nombresColumnas: string[] = ['ID Resultado', 'Nombre', 'Apellido', 'Partido', 'Total Votos Candidato'];

  elResultado: ResultadosTemporal = {
    Total_votos_candidato: 0,
    _id: "",
    doc: {
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
    this.ganador();
  }

  ganador(): void {
    this.miServicioReportes.ganador().subscribe(data => {
      this.elResultado = data[0];
      // console.log(this.elResultado)
    });
  }
}

interface ResultadosTemporal {
  Total_votos_candidato?: number;
  _id?: string;
  doc?: {
    candidato?: {
      nombre?: string;
      apellido?: string;
      partido?: {
        nombre: string;
      }
    }    
  };
  candidato?: Candidatos;
  nombre?: string;
  apellido?: string;
  partido?: Partidos;  
}
