import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-formation.component.html',
  styleUrl: './create-formation.component.css'
})
export class CreateFormationComponent {
  formationForm!:FormGroup
  constructor(private fbuild:FormBuilder, private router:Router){}

  ngOnInit():void{
    this.formationForm = this.fbuild.group({
      title:["", [Validators.required]],
      description:["",[Validators.required]],
      numberOfPlaces:["",[Validators.required]],
      level:["",[Validators.required]],
      skills:["",[Validators.required]],
      durationInHour:["",[Validators.required, Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)]]
    })
  }
}
