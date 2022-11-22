import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidatos } from '../../../modelos/candidatos.model';
import { CandidatosService } from '../../../servicios/candidatos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  
  modoCreacion: boolean = true;
  id_candidato: string = '';
  intentoEnvio: boolean = false;
  elCandidato: Candidatos = {
    cedula: 0,
    nombre: '',
    apellido: '',
    numero_resolucion: '',
  }

  constructor(private miServicioCandidatos: CandidatosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.modoCreacion = false;
      this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
      this.getCandidato(this.id_candidato)
    } else {
      this.modoCreacion = true;
    }
  }

  getCandidato(id: string) {
    this.miServicioCandidatos.getCandidato(id).subscribe(data => {
      this.elCandidato = data;
    });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioCandidatos.crear(this.elCandidato).subscribe(data => {
        Swal.fire(
          'Registrado',
          'El Candidato ha sido Registrado Exitósamente',
          'success',
        )
        this.router.navigate(['pages/candidatos/listar']);
      });
    }
  }

  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioCandidatos.editar(this.elCandidato._id, this.elCandidato).subscribe(data => {
        Swal.fire(
          'Actualizado',
          'El Candidato ha sido Actaulizado Exitósamente',
          'success',
        )
        this.router.navigate(['pages/candidatos/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elCandidato.cedula == 0 ||
        this.elCandidato.nombre == '' ||
        this.elCandidato.apellido == '' ||
        this.elCandidato.numero_resolucion == '') {
          return  false;
        } else {
          return true;
        }
  }
}
