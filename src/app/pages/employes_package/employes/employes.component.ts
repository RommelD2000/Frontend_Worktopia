import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeDTO } from '../employee.DTO';
import { EmployesService } from '../employes.service';
import { ApiResponse } from '../../../common/api.response';

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
    