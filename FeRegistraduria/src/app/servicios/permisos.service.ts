import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permisos } from '../modelos/permisos.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Permisos[]> {
    return this.http.get<Permisos[]>(`${environment.url_gateway}/permisos`);
  }

  eliminar(id: string) {
    return this.http.delete<Permisos>(`${environment.url_gateway}/permisos/${id}`,);
  }

  getPermiso(id: string): Observable<Permisos> {
    return this.http.get<Permisos>(`${environment.url_gateway}/permisos/${id}`);
  }

  crear(elPermiso: Permisos) {
    return this.http.post(`${environment.url_gateway}/permisos`, elPermiso);
  }

  editar(id: string, elPermiso: Permisos) {
    return this.http.put(`${environment.url_gateway}/permisos/${id}`, elPermiso);
  }
}
