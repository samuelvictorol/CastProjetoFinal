import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProjApiService } from '../proj-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-minhas-passagens',
  templateUrl: './minhas-passagens.component.html',
  styleUrls: ['./minhas-passagens.component.css']
})
export class MinhasPassagensComponent implements OnInit {
  lugaresLista: any = []
  currentUser: any;
  todasPassagensLista: any = []
  minhasPassagensLista: any = []
  load!: boolean;
  constructor(private service: ProjApiService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.service.getActiveUser()
    this.todasPassagensLista = this.service.getPassagens()
    this.minhasPassagens() // carregar na inicialização
    this.load = false
  }



  minhasPassagens() {
      this.minhasPassagensLista = []
      this.service.getPassagens().subscribe((data) => {
        this.todasPassagensLista = data;
        for (let i = 0; i < data.length; i++) {
          if (this.todasPassagensLista[i].passageiroId == this.currentUser.id) {
            this.minhasPassagensLista.push(this.todasPassagensLista[i])
          }
        }
      })
    }

  cancelarPassagem(id:number){
    this.load = true
    this.service.deletePassagens(id).subscribe(
      (resultado) =>setTimeout(() => {
        this.router.navigate(['user-logado']);
      }, 1000)
    )
  }

    buscarPassagens(){
    this.router.navigate(['user-logado']);
  }

  logout(){
    this.service.setActiveUser(null)
    this.router.navigate([''])
  }


}


