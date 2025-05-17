import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent {

}
