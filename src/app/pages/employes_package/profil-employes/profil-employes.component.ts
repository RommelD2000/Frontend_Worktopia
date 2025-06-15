import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../employes.service';
import { EmployeeDTO } from '../employee.DTO';

@Component({
  selector: 'app-profil-employes',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './profil-employes.component.html',
  styleUrl: './profil-employes.component.css'
})
export class ProfilEmployesComponent {
  public employee: EmployeeDTO | null = null;
  employeeService= inject(EmployesService)
  constructor(private route:ActivatedRoute,

  ){}

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id)
    this.employeeService.getEmployeebyId(id).subscribe(
      data => this.employee = data,
      error => console.error('Erreur lors de la récupération de l\'utilisateur', error)
    );
  }
}
