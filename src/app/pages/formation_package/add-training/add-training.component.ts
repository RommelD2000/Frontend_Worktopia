import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainingRequest } from '../../../training/training.request';
import { Router } from '@angular/router';
import { TrainingService } from '../../../training/training.service';

@Component({
  selector: 'app-add-training',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css'
})
export class AddTrainingComponent {
  trainingForm!:FormGroup
  private router=inject(Router)
  constructor(
    private fb:FormBuilder,
    private trainingService:TrainingService,
    
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

  // constructor(private fb:FormBuilder)
  saveTraining():void{
    // console.log(
      // this.trainingForm.value,


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


      // this.trainingService.addTraining(this.trainingForm.value as TrainingRequest).subscribe({
      //   next:(data)=>this.router.navigateByUrl("/formation")
      // })

      this.trainingService.addTraining(trainingRequest).subscribe({
        next:(data)=>{
          this.router.navigateByUrl("/formation")
          console.log(data)
        }
      })
    // )
  }










  //   // Après que la vue est initialisée, on attache les événements
  // ngAfterViewInit() {
  //   const acc = document.getElementsByClassName('accordion');
  //   for (let i = 0; i < acc.length; i++) {
  //     const element = acc[i] as HTMLElement;
  //     element.addEventListener('click', () => {
  //       element.classList.toggle('active');
  //       const panel = element.nextElementSibling as HTMLElement;
  //       if (panel.style.display === 'block') {
  //         panel.style.display = 'none';
  //       } else {
  //         panel.style.display = 'block';
  //       }
  //     });
  //   }
  //}
}
