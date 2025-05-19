import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-profil-employes',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './profil-employes.component.html',
  styleUrl: './profil-employes.component.css'
})
export class ProfilEmployesComponent {

}
