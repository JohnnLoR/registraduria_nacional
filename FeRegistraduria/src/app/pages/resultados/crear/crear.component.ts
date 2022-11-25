import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultados } from '../../../modelos/resultados.model';
import { ResultadosService } from '../../../servicios/resultados.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;
  elResultado: Resultados = {
    candidato: '',
    mesa: '',
  }

  constructor(private miServicioResultados: ResultadosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_resultado) {
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.getResultado(this.id_resultado)
    } else {
      this.modoCreacion = true;
    }
  }

  getResultado(id: string) {
    this.miServicioResultados.getResultado(id).subscribe(data => {
      this.elResultado = data;
    });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioResultados.crear(this.elResultado.mesa, this.elResultado.candidato, this.elResultado).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El Resultado se ha Registrado Exitósamente!!!',
          'success',
        )
        this.router.navigate(['pages/resultados/listar']);
      });
    }
  }

  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioResultados.editar(this.elResultado._id, this.elResultado.mesa, this.elResultado.candidato,  this.elResultado).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'Los Datos del Resultado han sido Actualizados Exitósamente',
          'success',
        )
        this.router.navigate(['pages/resultados/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elResultado.candidato == '' ||
        this.elResultado.mesa == '') {
          return false;
        } else {
          return true;
        }
  }

}
