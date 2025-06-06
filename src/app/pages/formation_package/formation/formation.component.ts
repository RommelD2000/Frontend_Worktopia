import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingDTO } from '../../../training/TrainingDTO';
import { TrainingService } from '../../../training/training.service';
import { ApiResponse } from '../../../common/api.response';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-formation',
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule,  DatePipe, RouterModule],
	templateUrl: './formation.component.html',
	styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit {
	trainingList: TrainingDTO[] = []

	constructor(private trainingService: TrainingService,
		private router: Router,
	) {
	}

	ngOnInit(): void {
		this.getTrainings()
	}


	private getTrainings() {
		this.trainingService.getAll().subscribe(
			{
				next: (result: ApiResponse) => {
					this.trainingList = result.data as TrainingDTO[]
				},
				error: (err) => console.log("Erreur ICI")
			}
		)
	}

	deleteTraining(id: any): void {
		console.log(id)
		if (confirm("Voulez-vous vraiment supprimer cette formation ?")) {
			this.trainingService.deleteTraining(id).subscribe({
				next: (result: ApiResponse) => {
					console.log('Réponse du serveur:', result);
					alert(result.message);
					this.getTrainings();
				},
				error: (err) => {
					console.error('Erreur lors de la suppression', err);
				}
			});
		}
	}
}
