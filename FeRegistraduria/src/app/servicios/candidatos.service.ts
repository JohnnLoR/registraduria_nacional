import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidatos } from '../modelos/candidatos.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(`${environment.url_gateway}/candidatos`);
  }

  eliminar(id: string) {
    return this.http.delete<Candidatos>(`${environment.url_gateway}/candidatos/${id}`,
    );
  }

  getCandidato(id: string): Observable<Candidatos> {
    return this.http.get<Candidatos>(`${environment.url_gateway}/candidatos/${id}`);
  }

  crear(elCandidato: Candidatos) {
    return this.http.post(`${environment.url_gateway}/candidatos`, elCandidato);
  }

  editar(id: string, elCandidato: Candidatos) {
    return this.http.put(`${environment.url_gateway}/candidatos/${id}`, elCandidato);
  }

  asignarPartido(id: string, id_partido: string, elCandidato: Candidatos) {
    return this.http.put(`${environment.url_gateway}/candidatos/${id}/partido/${id_partido}`, elCandidato);
  }
}
