import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { ProjApiService } from '../proj-api.service';
import { Passageiro } from './passageiro';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passageirosList : any = []
  formulario: any
  registerSuccess!: boolean;
  load!: boolean
  btnRegistrar_text!:string
  usuarioInvalido = false;

  constructor(private service: ProjApiService, private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      NomeCompleto : new FormControl(null),
      CPF: new FormControl(null),
      Nascimento: new FormControl(null),
      Endereco : new FormControl(null),
      Email: new FormControl(null),
      Telefone : new FormControl(null),
      usuario: new FormControl(null),
      Senha : new FormControl(null)
    })
    this.registerSuccess = false
    this.btnRegistrar_text = 'Registrar'
  }
  validarCpf(cpf: string | number[]) {
    if (typeof cpf !== 'string') return false
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
    let cpfNovo= cpf.split('').map((el: string | number) => +el)
    const rest = (count: number) => (cpfNovo.slice(0, count - 12)
      .reduce((soma: number, el: number, index: number) => {
        return (soma + el * (count - index));
      }, 0) * 10) % 11 % 10
    return rest(10) === cpfNovo[9] && rest(11) === cpfNovo[10]
  }


  EnviarFormulario(){
    const passageiro: Passageiro = this.formulario.value
    if(this.validarCpf(passageiro.CPF) == false){
      this.btnRegistrar_text = 'CPF Inválido'
      return;
    }
    if(passageiro.NomeCompleto == null || passageiro.NomeCompleto == ''){
      this.btnRegistrar_text = 'Nome não preenchido'
      return;
    }
    if(passageiro.Nascimento == null ){
      this.btnRegistrar_text = 'Data Nascimento Inválida'
      return;
    }

    if(passageiro.Endereco == null || passageiro.Endereco == ''){
      this.btnRegistrar_text = 'Endereco Invalido'
      return;
    }

    if(passageiro.Senha == null || passageiro.Senha == '' || passageiro.Senha.includes('#') == false || passageiro.Senha.length < 5){
      this.btnRegistrar_text = 'Senha pouco segura'
      return;
    }

    if(passageiro.Email == null || passageiro.Email == '' || passageiro.Email.includes('@') == false || passageiro.Email.includes('.com') == false){
      this.btnRegistrar_text = 'Email Invalido'
      return;
    }

    this.registerSuccess = true
    this.service.addPassageiro(passageiro).subscribe(
      (resultado) =>setTimeout(() => {
        this.btnRegistrar_text = 'registro completo'
        this.load == true;
        this.router.navigate(['']);
      }, 3100)
    )
  }

  Logar(){
    this.router.navigate(['']);
  }
}
