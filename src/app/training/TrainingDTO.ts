export interface TrainingDTO {
    dbId: number;
title: string;
description: string;
numberOfPlaces: number;
date: string;
 durationInDay: number,
    durationInHours: number,
    level:String,
    dateDebut: Date,
     location: String,
    periode: String,
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
