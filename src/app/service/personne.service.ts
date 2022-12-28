import { Injectable } from '@angular/core';
import { Personne } from '../model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private personne?: Personne;
  private isPersonneDefined = false;

  constructor() {
    console.log("personne service cree");
  }

  public updatePersonne(personne: Personne): void{
    this.personne = personne;
    this.isPersonneDefined = true;
  }

  get recupererPersonne(): Personne {
    if(this.personne){
      return this.personne;
    }
    else {
      return new Personne;
    }
  }

  public personneDefined(): boolean{
    return this.isPersonneDefined;
  }
}
