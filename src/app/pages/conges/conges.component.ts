import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-conges',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './conges.component.html',
  styleUrl: './conges.component.css'
})
export class CongesComponent {

}
