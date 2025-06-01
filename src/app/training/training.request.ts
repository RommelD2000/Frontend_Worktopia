   
  


export interface TrainingRequest {
    title: String,
    description: String,
    durationInDay: number,
    durationInHours: number,
    level:String,
    dateDebut: Date,
    location: String,
    periode: String,
    numberOfPlaces: Number,
    fichierFacultatif: String,
    coutFormation: Number,
    budgetImpute: Number,
    inscriptionOuverte: boolean,
        formateur?: {
        nomFormateur: string;
        telephoneFormateur: string;
        emailFormateur: string;
        typeFormateur: string;
    };
    trainingCategory?: {
        name: string;
    };

}