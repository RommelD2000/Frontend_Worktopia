import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-formulaire-nv-employe',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './formulaire-nv-employe.component.html',
  styleUrl: './formulaire-nv-employe.component.css'
})
export class FormulaireNvEmployeComponent {

}
