import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resultados } from '../modelos/resultados.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Resultados[]> {
    return this.http.get<Resultados[]>(`${environment.url_gateway}/resultados`);
  }

  eliminar(id: string) {
    return this.http.delete<Resultados>(`${environment.url_gateway}/resultados/${id}`,
    );
  }

  getResultado(id: string): Observable<Resultados> {
    return this.http.get<Resultados>(`${environment.url_gateway}/resultados/${id}`);
  }

  crear(id_mesa: string, id_Candidato: string, elResultado: Resultados) {
    return this.http.post(`${environment.url_gateway}/resultados/mesa/${id_mesa}/candidato/${id_Candidato}`, elResultado);
  }

  editar(id: string, id_mesa: string, id_Candidato: string, elResultado: Resultados) {
    return this.http.put(`${environment.url_gateway}/resultados/${id}/mesa/${id_mesa}/candidato/${id_Candidato}`, elResultado);
  }
}
