import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interface-employes',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './interface-employes.component.html',
  styleUrl: './interface-employes.component.css'
})
export class InterfaceEmployesComponent {
employe: any;

}
