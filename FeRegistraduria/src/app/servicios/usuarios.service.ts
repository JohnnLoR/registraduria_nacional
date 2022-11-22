import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${environment.url_gateway}/usuarios`);
  }

  eliminar(id: string) {
    return this.http.delete<Usuarios>(`${environment.url_gateway}/usuarios/${id}`,);
  }

  getUsuario(id: string): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${environment.url_gateway}/usuarios/${id}`);
  }

  crear(elUsuario: Usuarios) {
    return this.http.post(`${environment.url_gateway}/usuarios`, elUsuario);
  }

  editar(id: string, elUsuario: Usuarios) {
    return this.http.put(`${environment.url_gateway}/usuarios/${id}`, elUsuario);
  }
}
