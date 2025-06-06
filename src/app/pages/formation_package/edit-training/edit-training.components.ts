import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainingService } from '../../../training/training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingRequest } from '../../../training/training.request';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-training',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './edit-training.component.html',
  styleUrl: './edit-training.component.css'
})
export class EditTrainingComponent {
  editTrainingForm!:FormGroup
  // trainingRequest: TrainingRequest
  // id!: number;

    constructor(
      private activatedRoute: ActivatedRoute,
      private fb:FormBuilder,
      private trainingService:TrainingService,
      private router:Router,
      private route:ActivatedRoute
    ){}
    
    ngOnInit(){
     const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id)
      // this.id =  this.activatedRoute.snapshot.params["id"];
        

      this.editTrainingForm = this.fb.group({
          title: [null, [Validators.required]],
          category: [null, [Validators.required]],
          description: [null, [Validators.required]],
          durationInDay: [null, [Validators.required]],
          durationInHours: [null, [Validators.required]],
          level: [null, [Validators.required]],
          dateDebut: [null, [Validators.required]],
          location: [null, [Validators.required]],
          periode: [null, [Validators.required]],
          numberOfPlaces: [null, [Validators.required]],
          typeFormateur: [null, [Validators.required]],
          nomFormateur: [null, [Validators.required]],
          emailFormateur: [null, [Validators.required]],
          telephoneFormateur: [null, [Validators.required]],
          fichierFacultatif: [null, [Validators.required]],
          coutFormation: [null, [Validators.required]],
          budgetImpute: [null, [Validators.required]],
          inscriptionOuverte: [null, [Validators.required]],

      })
      this.getTrainingById(id)
    }

     editTraining(){

 const formData = this.editTrainingForm.value

  const trainingRequest: TrainingRequest = {
    title: formData.title,
    description: formData.description,
    durationInDay: formData.durationInDay,
    durationInHours: formData.durationInHours,
    level: formData.level,
    dateDebut:formData.dateDebut,
    location: formData.location,
    periode: formData.periode,
    numberOfPlaces: formData.numberOfPlaces,
    fichierFacultatif: formData.fichierFacultatif,
    budgetImpute: formData.budgetImpute,
    coutFormation: formData.coutFormation,
    inscriptionOuverte: formData.inscriptionOuverte,

    formateur: {
      nomFormateur: formData.nomFormateur,
      telephoneFormateur: formData.telephoneFormateur,
      emailFormateur: formData.emailFormateur,
      typeFormateur: formData.typeFormateur
    },
    trainingCategory: {
      name: formData.category
    }
  };



this.trainingService.editTraining(+this.route.snapshot.paramMap.get('id')!, trainingRequest).subscribe({
  next:(data)=>{
    this.router.navigateByUrl("formation");
  },
  error: (err) => {
					console.error('Erreur lors de la mise a jour', err);
				}
})








        

    }
    

    getTrainingById(id: any){
      
      this.trainingService.getTrainingbyId(id).subscribe((res)=>{
        console.log(res);
        this.editTrainingForm.patchValue(res);
      })
    }

  }
