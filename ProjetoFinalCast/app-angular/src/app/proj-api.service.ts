import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjApiService {
  activeUser: any

  readonly projfinalUrl = 'https://localhost:7186/api'
  constructor(private http: HttpClient ) {

  }

  ngOnInit(): void {
    this.activeUser = null;
  }
  // Usuário Ativo
  getActiveUser() { return this.activeUser}

  setActiveUser(user: any) { this.activeUser = user}

  // Passageiro
  getPassageiro():Observable<any[]> {
    return this.http.get<any>(this.projfinalUrl  + '/passageiros')
  }

  addPassageiro(data:any){
    return this.http.post(this.projfinalUrl + '/passageiros', data)
  }

  updatePassageiro(id: number|string, data:any){
    return this.http.put(this.projfinalUrl + `/passageiros/${id}`, data)
  }

  deletePassageiro(id: number|string){
    return this.http.delete(this.projfinalUrl + `/passageiros/${id}`)
  }

  // Empresa
  getEmpresas():Observable<any[]> {
    return this.http.get<any>(this.projfinalUrl  + '/empresas')
  }

  addEmpresas(data:any){
    return this.http.post(this.projfinalUrl + '/empresas', data)
  }

  updateEmpresas(id: number|string, data:any){
    return this.http.put(this.projfinalUrl + `/empresas/${id}`, data)
  }

  deleteEmpresas(id: number|string){
    return this.http.delete(this.projfinalUrl + `/empresas/${id}`)
  }

  //Lugares
  getLugares():Observable<any[]> {
    return this.http.get<any>(this.projfinalUrl  + '/lugares')
  }

  addLugares(data:any){
    return this.http.post(this.projfinalUrl + '/lugares', data)
  }

  updateLugares(id: number|string, data:any){
    return this.http.put(this.projfinalUrl + `/lugares/${id}`, data)
  }

  deleteLugares(id: number|string){
    return this.http.delete(this.projfinalUrl + `/lugares/${id}`)
  }

  //Passagens
  getPassagens():Observable<any[]> {
    return this.http.get<any>(this.projfinalUrl  + '/passagens')
  }

  addPassagens(data:any){
    return this.http.post(this.projfinalUrl + '/passagens', data)
  }

  updatePassagens(id: number|string, data:any){
    return this.http.put(this.projfinalUrl + `/passagens/${id}`, data)
  }

  deletePassagens(id: number|string){
    return this.http.delete(this.projfinalUrl + `/passagens/${id}`)
  }

  //Admins

  getAdmins():Observable<any[]> {
    return this.http.get<any>(this.projfinalUrl  + '/Admins')
  }

  addAdmins(data:any){
    return this.http.post(this.projfinalUrl + '/Admins', data)
  }

  updateAdmins(id: number|string, data:any){
    return this.http.put(this.projfinalUrl + `/Admins/${id}`, data)
  }

  deleteAdmins(id: number|string){
    return this.http.delete(this.projfinalUrl + `/Admins/${id}`)
  }
}
