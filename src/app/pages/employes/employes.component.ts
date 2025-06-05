import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { ApiResponse } from '../../common/api.response';
import { EmployeeRequest } from '../employes_package/employee.request';
import { EmployeeDTO } from '../employes_package/employee.DTO';
import { TrainingService } from '../../training/training.service';
import { EmployesService } from '../employes_package/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent {
  
  employesList: EmployeeDTO[] = [];

  constructor(private employeService: EmployesService,
      private router:Router,
    ) {

       this.getEmployes()
  }


private getEmployes() {
  console.log("a")
    this.employeService.getAll().subscribe(
      {
        next: (result: ApiResponse)=>{
            this.employesList = result.data as EmployeeDTO[]
        },
        error:()=> console.log("Erreur ICI")
      }
    )
    }
    }
    