import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { PaieComponent } from './pages/paie/paie.component';
import { CongesComponent } from './pages/conges/conges.component';
import { FormationComponent } from './pages/formation_package/formation/formation.component';
import { CreateFormationComponent } from './pages/formation_package/create-formation/create-formation.component';
import { FormulaireNvEmployeComponent } from './pages/employes_package/formulaire-nv-employe/formulaire-nv-employe.component';
import { InterfaceEmployesComponent } from './pages/employes_package/interface-employes/interface-employes.component';
import { ProfilEmployesComponent } from './pages/employes_package/profil-employes/profil-employes.component';

export const routes: Routes = [
    {path : "", component:HomeComponent},

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

];
