import { Component } from '@angular/core';
import { TrainingService } from '../../../training/training.service';
import { TrainingDTO } from '../../../training/TrainingDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../../../common/api.response';

@Component({
  selector: 'app-details-training',
  standalone: true,
  imports: [],
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
    console.log(this.route.snapshot.params['id'])
    this.getTrainingsById(this.route.snapshot.params['id'])
   }
    private getTrainingsById(id: any) {
      this.trainingService.getTrainingbyId(this.route.snapshot.params['id']).subscribe((training: TrainingDTO) => {
  this.training = training;
});
   }
}
