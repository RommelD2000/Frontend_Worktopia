import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainingRequest } from '../../../training/training.request';
import { Router } from '@angular/router';
import { TrainingService } from '../../../training/training.service';
import { ApiResponse } from '../../../common/api.response';

@Component({
  selector: 'app-add-training',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css'
})
export class AddTrainingComponent {
      successMessage: String | null = null;

  trainingForm!:FormGroup
  private router=inject(Router)
  constructor(
    private fb:FormBuilder,
    private trainingService:TrainingService,
    
  ){}

  ngOnInit():void{
    

    this.trainingForm = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(3)]],
    category: ["", [Validators.required]],
    description: ["", [Validators.required, Validators.minLength(10)]],
    durationInDay: ["", [Validators.required, Validators.pattern("^[0-9]+$"), Validators.min(1)]],
    durationInHours: ["", [Validators.required, Validators.pattern("^[0-9]+$"), Validators.min(1)]],
    level: ["", [Validators.required]],
    dateDebut: ["", [Validators.required]],
    location: ["", [Validators.required]],
    periode: ["", [Validators.required]],
    numberOfPlaces: ["", [Validators.required, Validators.pattern("^[0-9]+$"), Validators.min(1)]],
    typFormateur: ["", [Validators.required]],
    nomFormateur: ["", [Validators.required, Validators.minLength(3)]],
    emailFormateur: ["", [Validators.required, Validators.email]],
    telephoneFormateur: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    fichierFacultatif: ["", []], // Si ce champ est facultatif, ne pas ajouter Validators.required
    budgetImpute: ["", [Validators.required]],
    coutFormation: ["", [Validators.required, Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$")]],
    inscriptionOuverte: ["", [Validators.required]],
});
  }


  saveTraining():void{
   

      const formData = this.trainingForm.value

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

  

      this.trainingService.addTraining(trainingRequest).subscribe({
        next:(result: ApiResponse )=>{
            this.successMessage = result.message;
          this.router.navigateByUrl("/formation"),
          setTimeout(()=>{
            this.successMessage = null
          }, 10000)
          
        },
        error: (err) => {
					console.error("Erreur lors de l'ajout de la formation ", err);
				}
      })
    // )
  }



  

}
