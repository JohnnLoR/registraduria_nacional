import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { Resultados } from '../../../modelos/resultados.model';
import { ReportesService } from '../../../servicios/reportes.service';

@Component({
  selector: 'ngx-max-inscritos',
  templateUrl: './max-inscritos.component.html',
  styleUrls: ['./max-inscritos.component.scss']
})
export class MaxInscritosComponent implements OnInit {

  resultados: Resultados[];
  nombresColumnas: string[] = ['Id Resultado', 'Mesa Número', 'Cantidad de Inscritos'];

  elResultado: ResultadosTemporal = {
      _id: "",
      cantidad_inscritos: 0,
      numero: 0,
    }

  constructor(private miServicioResultados: ReportesService) { }

  ngOnInit(): void {
    this.maxInscritos();
  }

  maxInscritos(): void {
    this.miServicioResultados.maxInscritos().subscribe(data => {
      this.elResultado = data[0];
      // console.log(this.elResultado)
    });
  }
}

interface ResultadosTemporal{
  _id?: string;
  numero?: number;
  cantidad_inscritos?: number;
}
