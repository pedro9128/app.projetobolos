import { Injectable } from "@angular/core";
import { Bolos } from "../models/bolos";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BolosService {
  url = "http://localhost:3100";
  constructor(private http: HttpClient) {}

  getBolos() {
    return this.http.get(`${this.url}/bolos`);
  }

  getBoloById(id){
    return this.http.get(`${this.url}/bolos/${id}`);
  }
}
