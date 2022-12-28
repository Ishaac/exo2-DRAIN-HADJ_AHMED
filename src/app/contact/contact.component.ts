import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from '../model/personne.model';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactFormGroup: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl(),
    commentaire: new FormControl('', Validators.required),
    estCache: new FormControl(false)
  });

  constructor(private router: Router, private personneService: PersonneService) {}

  ngOnInit(): void {
  }

  public onEnvoyer(): void {
    alert("Le formulaire est valide");
    this.router.navigate(['/home']);
    let personne = new Personne();
    personne.nom = this.contactFormGroup.value.nom;
    personne.prenom = this.contactFormGroup.value.prenom;
    personne.commentaire = this.contactFormGroup.value.commentaire;
    personne.mail = this.contactFormGroup.value.mail;
    personne.age = this.contactFormGroup.value.age;
    this.personneService.updatePersonne(personne);
  }

  get estCache(): any {
    return this.contactFormGroup.get('estCache');
  }

  onCheckboxChange(): void{
    if(this.contactFormGroup.get('estCache')?.value){
      this.contactFormGroup.get('mail')?.setValidators([Validators.email]);
      this.contactFormGroup.get('mail')?.updateValueAndValidity();
    }
    else {
      this.contactFormGroup.get('mail')?.setValidators([Validators.email, Validators.required]);
      this.contactFormGroup.get('mail')?.updateValueAndValidity();
    }
  }
}

