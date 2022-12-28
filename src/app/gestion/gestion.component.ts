import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne.model';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public personne?: Personne;
  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    console.log(this.personneService.recupererPersonne);
    if(this.personneService.personneDefined()){
      this.personne = this.personneService.recupererPersonne;
    }
  }

}
