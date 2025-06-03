import { Component, inject, NgModule } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../../components/side-bar/side-bar.component';
import { EmployeeRequest } from '../employee.request';
import { EmployesService } from '../employes.service';

@Component({
  selector: 'app-formulaire-nv-employe',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  templateUrl: './formulaire-nv-employe.component.html',
  styleUrl: './formulaire-nv-employe.component.css'
})
export class FormulaireNvEmployeComponent {
  [x: string]: any;

  employeService = inject(EmployesService);
  employeeForm!: FormGroup;
  constructor(private fbuild: FormBuilder, private router: Router) { }
  employeeRequest: any;
  ngOnInit(): void {
    this.employeeForm = this.fbuild.group({
      firstName: ["", [Validators.required, Validators.minLength(5)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      position: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      dateofbirth: ["", [Validators.required]],
      address: ["", [Validators.required]],
      department: ["", [Validators.required]],
      manager: ["", [Validators.required]],
      dateembauche: ["", [Validators.required]],
      typecontrat: ["", [Validators.required]],
      salairebrut: ["", [Validators.required]],
      iban: ["", [Validators.required]],
      gender: ["", [Validators.required]]


    })
  }


  onSubmit(): void {

  console.log(this.employeeForm.value)

    console.log(this.employeService.save(this.employeeForm.value as EmployeeRequest).subscribe({
      next: (data) => this.router.navigateByUrl("/employe"),
      error: (err) => console.log(err)
    }));
  }

}