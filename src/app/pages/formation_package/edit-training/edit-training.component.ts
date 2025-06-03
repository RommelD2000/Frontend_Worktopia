import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainingService } from '../../../training/training.service';
import { ActivatedRoute, Router } from '@angular/router';
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
      private router:Router,
      private route:ActivatedRoute
    ){}
  
    // trainingf = new TrainingRequest();
    ngOnInit():void{

      this.trainingService.getTrainingbyId(this.route.snapshot.params['id']).subscribe({
  next: (data) => {
    // Pré-remplir le formulaire
    this.trainingForm.patchValue({
      title: data.title,
      category: data.trainingCategory?.name,
      description: data.description,
      numberOfPlaces: data.numberOfPlaces,
      durationInDay: data.durationInDay,
      durationInHours: data.durationInHours,
      level: data.level,
      dateDebut: data.dateDebut,
      location: data.location,
      periode: data.periode,
      typFormateur: data.formateur?.typeFormateur,
      nomFormateur: data.formateur?.nomFormateur,
      emailFormateur: data.formateur?.emailFormateur,
      telephoneFormateur: data.formateur?.telephoneFormateur,
      fichierFacultatif: data.fichierFacultatif,
      budgetImpute: data.budgetImpute,
      coutFormation: data.coutFormation,
      inscriptionOuverte: data.inscriptionOuverte

    });
  },
  error: (err) => console.error("Erreur lors de la récupération", err)
});





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
        this.trainingService.editTraining(this.route.snapshot.params['id'], this.trainingForm.value as TrainingRequest).subscribe({
          next:(data)=>this.router.navigateByUrl("/formation"),
          error:(err)=>console.log(err)
        })
       )
    }}
