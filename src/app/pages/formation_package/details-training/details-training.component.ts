import { Component } from '@angular/core';
import { TrainingService } from '../../../training/training.service';
import { TrainingDTO } from '../../../training/TrainingDTO';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiResponse } from '../../../common/api.response';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details-training',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './details-training.component.html',
  styleUrl: './details-training.component.css'
})
export class DetailsTrainingComponent {
  public training: TrainingDTO | null = null;

  constructor(
    private trainingService: TrainingService, 
    private router:Router, 
    private route:ActivatedRoute) {
    }


   ngOnInit():void{
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id)
    this.trainingService.getTrainingbyId(id).subscribe(
      data => this.training = data,
      error => console.error('Erreur lors de la récupération de l\'utilisateur', error)
    );
   
}
}
