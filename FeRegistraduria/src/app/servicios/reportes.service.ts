import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resultados } from '../modelos/resultados.model';
import { Candidatos } from '../modelos/candidatos.model';
import { Mesas } from '../modelos/mesas.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(`${environment.url_gateway}/candidatos`);
  }

  listarMesas(): Observable<Mesas[]> {
    return this.http.get<Mesas[]>(`${environment.url_gateway}/mesas`);
  }

  maxInscritos(): Observable<Resultados> {
    return this.http.get<Resultados>(`${environment.url_gateway}/mesas/mayor-inscritos`);
  }

  candidatoMesas(id_candidato: string): Observable<Resultados[]> {
    return this.http.get<Resultados[]>(`${environment.url_gateway}/resultados/mesas/${id_candidato}`);
  }

  candidatosMesa(id_mesa: string): Observable<Resultados[]> {
    return this.http.get<Resultados[]>(`${environment.url_gateway}/resultados/mesa/${id_mesa}`);
  }

  conteo(): Observable<Resultados[]> {
    return this.http.get<Resultados[]>(`${environment.url_gateway}/resultados/votos`);
  }

  ganador(): Observable<Resultados> {
    return this.http.get<Resultados>(`${environment.url_gateway}/resultados/ganador`);
  }
}
