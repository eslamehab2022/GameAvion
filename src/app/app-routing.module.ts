import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllgamesComponent } from './allgames/allgames.component';
import { AtuhGuard } from './atuh.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OnlinegamesComponent } from './onlinegames/onlinegames.component';
import { RegisterComponent } from './register/register.component';
import { ShooterComponent } from './shooter/shooter.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
   {path:'', redirectTo:'welcome',pathMatch:'full'},
  { path: 'onlinegames', component: OnlinegamesComponent, },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'allgames', component: AllgamesComponent , },
  { path: 'login', component: LoginComponent ,  },
  { path: 'shooter', component: ShooterComponent  , },
  { path: 'Register', component: RegisterComponent },
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
