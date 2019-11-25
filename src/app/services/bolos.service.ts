import { Bolos } from "../models/bolos";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BolosService {
  url = "http://localhost:3100";
  constructor(private http: HttpClient) {}

  getBolos(): Observable<Bolos[]> {
    return this.http.get<Bolos[]>(`${this.url}/bolos`);
  }

  getBoloById(nome: String): Observable<Bolos> {
    return this.http.get<Bolos>(`${this.url}/bolos/${nome}`);
  }

  addBolo(bolo: Bolos): Observable<Bolos> {
    return this.http.post<Bolos>(`${this.url}/bolos/`, bolo);
  }
}
