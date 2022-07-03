import { Component, OnInit } from '@angular/core';
import { ProjApiService } from '../proj-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passageirosLista: any = [];
  show: boolean = true;
  user = '';
  password = '';
  userValido!: boolean;
  userInvalido!: boolean;
  loginLoad: boolean = false
  loginbtn_text!: string
  constructor(private service: ProjApiService, private router: Router) {}

  ngOnInit(): void {
    this.userValido = false;
    this.loginbtn_text = 'Logar'
  }

  textBtn(){
    this.loginbtn_text = 'Logar';
  }

  Passageiros() {
    this.service.getPassageiro().subscribe((data) => {
      this.passageirosLista = data;
      for (let i = 0; i < data.length; i++) {
        if (
          this.passageirosLista[i].usuario == this.user &&
          this.passageirosLista[i].senha == this.password
        ) {
          this.service.setActiveUser(this.passageirosLista[i])
          this.userValido = true;
          this.userInvalido = false;
          this.loginLoad = true;
          setTimeout(() => {
            this.router.navigate(['user-logado']);
          }, 2000);
        }
      }
      if (this.userValido == false) {
        this.userInvalido = true;
        this.loginbtn_text = 'Usuario/Senha Inválido(s)'
      }
    });
  }
}
