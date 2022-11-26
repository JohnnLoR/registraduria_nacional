import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private miServicioSeguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
    console.log('Bye, bye...')
    this.miServicioSeguridad.logout();
    this.router.navigate(['/pages/layout/tabs']);
    Swal.fire({
      title: 'Cerrar Sesión!',
      text: 'Haz Cerrado Sesión Exitósamente!!!',
      icon: 'success',
    });
  }
}
