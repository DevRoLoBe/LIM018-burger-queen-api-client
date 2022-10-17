import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Products {
  _id: string;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: any;
}
export interface ListaEmpleadosI{
  id: string;
  nombre: string;
  email: string;
  password:string;
  rol:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

private readonly API = environment.api;
  constructor(private readonly http:HttpClient) { }

  addNewCity(city:string): Observable<Products> {
    const body = {name: city};
    let direccion =this.API + "auth"
    return this.http.post<Products>(direccion, body);
   }
  getProducts(): Observable<Products[]> {
    let direccion =this.API + "auth"
    return this.http.get<Products[]>(direccion)
   }
  updateCity(city: Products): Observable<void> { 
    const body = {name:city.name};
    let direccion =this.API + "auth"
    return this.http.put<void>(`${direccion}/${city._id}`, body)
  }
  deleteCity(id: string): Observable<void> { 
    let direccion =this.API + "auth"
    return this.http.delete<void>(`${direccion}/${id}`);
  }

  getAllEmpleados():Observable<ListaEmpleadosI[]>{
    let direccion =this.API + "users"
    return this.http.get<ListaEmpleadosI[]>(direccion);
  }
}