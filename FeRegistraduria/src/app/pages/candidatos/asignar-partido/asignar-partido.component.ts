import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { Partidos } from '../../../modelos/partidos.model';
import { CandidatosService } from '../../../servicios/candidatos.service';
import { PartidosService } from '../../../servicios/partidos.service';

@Component({
  selector: 'ngx-asignar-partido',
  templateUrl: './asignar-partido.component.html',
  styleUrls: ['./asignar-partido.component.scss']
})
export class AsignarPartidoComponent implements OnInit {

  partidos: Partidos[];
  laMesa: Partidos = {
    _id: '',
    nombre: '',
  }
  
  candidatos: Candidatos[];
  id_candidato: string = '';
  intentoEnvio: boolean = false;
  elCandidato: Candidatos = {
    _id: '',
    nombre: '',
    apellido: '',
    partido: '',
  }


  constructor(private miServicioCandidatos: CandidatosService,
              private miServicioPartidos: PartidosService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
    }

    this.listarCandidatos();
    this.listarPartidos();
  }

  asignarPartido(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioCandidatos.asignarPartido(this.elCandidato._id, this.elCandidato.partido, this.elCandidato).subscribe(data => {
        Swal.fire(
          'Asignado',
          'El Candidato ha sido Asignado a un Partido Exitósamente',
          'success',
        )
        this.router.navigate(['pages/candidatos/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elCandidato._id == '' ||
        this.elCandidato.partido == '') {
          return  false;
        } else {
          return true;
        }
  }

  listarCandidatos(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      this.candidatos = data;
      // console.log(this.candidatos)
    });
  }

  listarPartidos(): void {
    this.miServicioPartidos.listar().subscribe(data => {
      this.partidos = data;
      // console.log(this.partidos)
    })
  }
}
