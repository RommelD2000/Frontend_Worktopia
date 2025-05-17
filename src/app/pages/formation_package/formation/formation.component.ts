import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  
}
