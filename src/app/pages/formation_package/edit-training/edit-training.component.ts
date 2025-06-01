import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainingService } from '../../../training/training.service';
import { Router } from '@angular/router';
import { TrainingRequest } from '../../../training/training.request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-training',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './edit-training.component.html',
  styleUrl: './edit-training.component.css'
})
export class EditTrainingComponent {
  trainingForm!:FormGroup
    constructor(
      private fb:FormBuilder,
      private trainingService:TrainingService,
      private router:Router
    ){}
  
    ngOnInit():void{
      this.trainingForm = this.fb.group({
          title:["",[Validators.required]],
          category:["",[Validators.required]],
          description:["",[Validators.required]],
          durationInDay:["",[Validators.required]],
          durationInHours:["",[Validators.required]],
          level:["",[Validators.required]],
          dateDebut:["",[Validators.required]],
          location:["",[Validators.required]],
          periode:["",[Validators.required]],
          numberOfPlaces:["",[Validators.required]],
          typFormateur:["",[Validators.required]],
          nomFormateur:["",[Validators.required]],
          emailFormateur:["",[Validators.required]],
          telephoneFormateur:["",[Validators.required]],
          fichierFacultatif:["",[Validators.required]],
          budgetImpute:["",[Validators.required]],
          coutFormation:["",[Validators.required]],
          inscriptionOuverte:["",[Validators.required]],
      });
    }
  
    editTraining():void{
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
  
  console.log(this.trainingForm.value,
        this.trainingService.addTraining(trainingRequest).subscribe({
          next:(data)=>this.router.navigateByUrl("/formation"),
          error:(err)=>console.log(err)
        })
       )
    }}
