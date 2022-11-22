import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment';
import { PermisosRoles } from '../modelos/permisos-roles.model';

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

  crear(elPermisoRol: PermisosRoles) {  /* , id_rol: string, id_permiso: string */
    return this.http.post(`${environment.url_gateway}/permisos-roles`, elPermisoRol);  /* /rol/${id_rol}/permiso/${id_permiso}`, elPermisoRol */
  }

  editar(id: string, elPermisoRol: PermisosRoles) { /*, id_rol: string, id_permiso: string*/
    return this.http.put(`${environment.url_gateway}/permisos-roles/${id}`, elPermisoRol) /*/rol/${id_rol}/permiso/${id_permiso}*/
  }
}
