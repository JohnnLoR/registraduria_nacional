import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuarios } from '../../../modelos/usuarios.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  correo: string = '';
  contrasena: string =  '';

  constructor(private miServicioSeguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // console.log('aqui: ' + this.correo + ' contraseña ' + this.contrasena);
    let elUsuario: Usuarios = {
      correo: this.correo,
      contrasena: this.contrasena,
    };
    this.miServicioSeguridad.login(elUsuario).subscribe(
      data => {
        this.router.navigate(['/pages/layout/tabs']);
        this.miServicioSeguridad.guardarDatosSesion(data);
        Swal.fire({
          title: 'Inicio de Sesión!',
          text: '¡Hola! ' + this.correo + '. ¡Haz Iniciado Sesión Exitósamente!',
          icon: 'success',
        });
      },
      error => {
          Swal.fire({
          title: 'Error Login',
          text: error['error']['message'],
          icon: 'error',
          timer: 5000,
        });
      },
    );
  }

}
