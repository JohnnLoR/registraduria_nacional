import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment';
import { PermisosRoles } from '../modelos/permisos-roles.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosRolesService {

  constructor(private http: HttpClient) { }

  listar(): Observable<PermisosRoles[]> {
    return this.http.get<PermisosRoles[]>(`${environment.url_gateway}/permisos-roles`);
  }

  eliminar(id: string) {
    return this.http.delete<PermisosRoles>(`${environment.url_gateway}/permisos-roles/${id}`,);
  }

  getPermisoRol(id: string): Observable<PermisosRoles> {
    return this.http.get<PermisosRoles>(`${environment.url_gateway}/permisos-roles/${id}`);
  }

  crear(id_rol: string, id_permiso: string, elPermisoRol: PermisosRoles) {
    return this.http.post(`${environment.url_gateway}/permisos-roles/rol/${id_rol}/permiso/${id_permiso}`, elPermisoRol);
  }

  editar(id: string, id_rol: string, id_permiso: string, elPermisoRol: PermisosRoles) {
    return this.http.put(`${environment.url_gateway}/permisos-roles/${id}/rol/${id_rol}/permiso/${id_permiso}`, elPermisoRol)
  }
}
