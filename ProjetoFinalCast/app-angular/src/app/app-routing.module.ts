import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MinhasPassagensComponent } from './minhas-passagens/minhas-passagens.component';
import { RegisterComponent } from './register/register.component';
import { UserLogadoComponent } from './user-logado/user-logado.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user-logado', component:UserLogadoComponent},
  {path:'minhas-passagens', component:MinhasPassagensComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
