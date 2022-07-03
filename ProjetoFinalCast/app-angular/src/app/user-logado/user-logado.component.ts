import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProjApiService } from '../proj-api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Passagem } from './passagem';
@Component({
  selector: 'app-user-logado',
  templateUrl: './user-logado.component.html',
  styleUrls: ['./user-logado.component.css']
})
export class UserLogadoComponent implements OnInit {
  lugaresLista$!: Observable<any[]>
  lugaresLista: any = []
  lugaresListaFiltrada: any = []
  currentUser: any;
  lugarNomeSelect: any
  todosLugares: any
  todosLugaresString = 'Todos'
  showDetalhes!: boolean
  dateIda: any
  dateVolta: any
  detalhesLugar = {id: 0, nomeLugar: '', url:'', valorDia: 99.99}
  selecionarData!:boolean
  formulario: any;
  lugarSelecionado: any;
  btnReserva_text!: string
  telefoneEdit: any
  constructor(private service: ProjApiService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.service.getActiveUser()
    this.lugaresLista$ = this.service.getLugares()
    this.showDetalhes = false
    this.select()
    this.selecionarData = true
    this.btnReserva_text = 'Reservar'

  }
  EnviarFormularioEdit(){
    alert(this.telefoneEdit)
    var formularioEdit
    this.service.updatePassageiro(this.currentUser.id, formularioEdit).subscribe((result) => {
      alert(this.currentUser.nomeCompleto)
    })

  }
  reservarPassagem(){
    const Origem = new FormControl('Brasília')
    const DestinoId =new FormControl(this.lugarSelecionado.id)
    const Destino =new FormControl(this.lugarSelecionado.nomeLugar)
    const Valor = new FormControl(this.lugarSelecionado.valorDia)
    const EmpresaId = new FormControl(1)
    const Empresa = new FormControl('Tam')
    const PassageiroId = new FormControl(this.currentUser.id)
    const NomePassageiro = new FormControl(this.currentUser.nomeCompleto)
    const DataIda = new FormControl(this.dateIda)
    const DataVolta = new FormControl(this.dateVolta)
    ////////////////////////////////////////////
    this.formulario = new FormGroup({
      Origem :  new FormControl(Origem.value),
      DestinoId : new FormControl(DestinoId.value),
      Destino : new FormControl(Destino.value),
      Valor : new FormControl(Valor.value),
      EmpresaId : new FormControl(EmpresaId.value),
      Empresa : new FormControl(Empresa.value),
      PassageiroId : new FormControl(PassageiroId.value),
      NomePassageiro : new FormControl(NomePassageiro.value),
      DataIda : new FormControl(DataIda.value),
      DataVolta :  new FormControl(DataVolta.value)
    })
    const passagem : Passagem = this.formulario.value
    if(DataIda.value == null || DataVolta.value == null){
      this.btnReserva_text = 'Data Inválida'
    }else{
      this.btnReserva_text = 'Gerando reserva...'
      this.service.addPassagens(passagem).subscribe(
        (resultado) =>setTimeout(() => {
          this.btnReserva_text = 'Gerando reserva...'
          this.router.navigate(['minhas-passagens'])
        }, 2000)
        )
      }

    }


  minhasPassagens(){
    this.router.navigate(['minhas-passagens']);
  }

  detalhes(l: any){
    this.lugarSelecionado = l
    this.lugarNomeSelect = l.nomeLugar
    this.select()
    this.detalhesLugar.url = l.url
    this.detalhesLugar.nomeLugar = l.nomeLugar
    this.detalhesLugar.valorDia = l.valorDia
    this.showDetalhes = true
  }

  data(){
    this.selecionarData = false
  }

  logout(){
    this.service.setActiveUser(null)
    this.router.navigate([''])
  }

  select(){
    if(this.lugarNomeSelect === undefined){
      this.service.getLugares().subscribe((data) => {
        this.lugaresListaFiltrada = data
        this.showDetalhes = false
      })
    }

    this.lugaresListaFiltrada = []
    this.service.getLugares().subscribe((data) => {
      this.lugaresLista = data;
      for (let i = 0; i < data.length; i++) {
        if (this.lugaresLista[i].nomeLugar === (this.lugarNomeSelect)){
          this.lugaresListaFiltrada.push(this.lugaresLista[i])
        }
      }
    })
  }
}
