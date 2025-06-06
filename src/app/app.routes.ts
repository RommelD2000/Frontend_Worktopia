import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployesComponent } from './pages/employes_package/employes/employes.component';
import { PaieComponent } from './pages/paie/paie.component';
import { CongesComponent } from './pages/conges/conges.component';
import { FormationComponent } from './pages/formation_package/formation/formation.component';
import { FormulaireNvEmployeComponent } from './pages/employes_package/formulaire-nv-employe/formulaire-nv-employe.component';
import { InterfaceEmployesComponent } from './pages/employes_package/interface-employes/interface-employes.component';
import { ProfilEmployesComponent } from './pages/employes_package/profil-employes/profil-employes.component';
import {LayoutComponent} from './components/layout/layout.component';
import {authGuard} from './core/guards/auth.guard';
import { AddTrainingComponent } from './pages/formation_package/add-training/add-training.component';
import { DetailsTrainingComponent } from './pages/formation_package/details-training/details-training.component';
import { EditTrainingComponent } from './pages/formation_package/edit-training/edit-training.components';


export const routes: Routes = [
/*
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path : 'login', component:LoginComponent},


  {path : "accueil", component:AccueilComponent},
  {path : "dashboard" ,component:DashboardComponent},
  {path : "employe" ,component:EmployesComponent},
  {path : "paie" ,component:PaieComponent},
  {path : "conge" ,component:CongesComponent},
  {path : "formation" ,component:FormationComponent},
     {path : "create-formation" ,component:CreateFormationComponent},
     { path : "formulaire-nv-employes", component:FormulaireNvEmployeComponent},
     {path : "interface-employes", component:InterfaceEmployesComponent},
     {path : "profil-employes", component:ProfilEmployesComponent}
*/
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [authGuard]
      },
      {
        path:'employe',
        component:EmployesComponent,
        canActivate: [authGuard]
      },
      {
        path:'paie',
        component:PaieComponent,
        canActivate: [authGuard]
      },
      {
        path:'conge',
        component:CongesComponent,
        canActivate: [authGuard]
      },
      {
        path:'formation',
        component:FormationComponent,
        canActivate: [authGuard],
      },

     {
      path: "add-training",
      component:AddTrainingComponent,
        canActivate: [authGuard]

     },
     {
      path: "details-formation/:id",
      component:DetailsTrainingComponent,
        canActivate: [authGuard]

     },
     {
      path: "edit-formation/:id",
      component:EditTrainingComponent,
        canActivate: [authGuard]

     },{ path : "formulaire-nv-employes", component:FormulaireNvEmployeComponent},

    ]
  }

];
