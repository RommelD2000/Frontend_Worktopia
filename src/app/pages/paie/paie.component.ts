import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-paie',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './paie.component.html',
  styleUrl: './paie.component.css'
})
export class PaieComponent {

}
