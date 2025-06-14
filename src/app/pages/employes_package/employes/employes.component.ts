import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { EmployeeDTO } from '../employee.DTO';
import { EmployesService } from '../employes.service';
import { ApiResponse } from '../../../common/api.response';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent {
deleteEmploye(id: any): void {
		console.log(id)
		if (confirm("Voulez-vous vraiment supprimer cet employe ?")) {
			this.employeService.deleteTraining(id).subscribe({
				next: (result: ApiResponse) => {
					console.log('Réponse du serveur:', result);
					alert(result.message);
					this.getEmployes();
				},
				error: (err) => {
					console.error('Erreur lors de la suppression', err);
				}
			});
		}
	}

  
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
    