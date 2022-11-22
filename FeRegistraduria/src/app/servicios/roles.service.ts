import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Roles } from '../modelos/roles.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${environment.url_gateway}/roles`);
  }

  eliminar(id: string) {
    return this.http.delete<Roles>(`${environment.url_gateway}/roles/${id}`,);
  }

  getRol(id: string): Observable<Roles> {
    return this.http.get<Roles>(`${environment.url_gateway}/roles/${id}`);
  }

  crear(elRol: Roles) {
    return this.http.post(`${environment.url_gateway}/roles`, elRol);
  }

  editar(id: string, elRol: Roles) {
    return this.http.put(`${environment.url_gateway}/roles/${id}`, elRol);
  }
}
