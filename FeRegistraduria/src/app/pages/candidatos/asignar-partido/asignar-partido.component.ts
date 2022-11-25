import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { CandidatosService } from '../../../servicios/candidatos.service';


@Component({
  selector: 'ngx-asignar-partido',
  templateUrl: './asignar-partido.component.html',
  styleUrls: ['./asignar-partido.component.scss']
})
export class AsignarPartidoComponent implements OnInit {

  id_candidato: string = '';
  intentoEnvio: boolean = false;
  elCandidato: Candidatos = {
    _id: '',
    partido: '',
  }


  constructor(private miServicioCandidatos: CandidatosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
    }
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
}
