import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  public listFilm: Film[] = [
    {
      id: 1,
      title : 'Pulp Fiction',
      path : '../../assets/image-film/pulp-fiction.jpg'
    },
    {
      id: 2,
      title : 'Once upon a time in Hollywood',
      path : '../../assets/image-film/once-upon-a-time-in-hollywood.jpg'
    },
    {
      id: 3,
      title : 'Django Unchained',
      path : '../../assets/image-film/django-unchained.jpg'
    },
    {
      id: 4,
      title : 'Les huit salopards',
      path : '../../assets/image-film/les-huit-salopards.jpg'
    },
    {
      id: 5,
      title : 'Kill Bill',
      path : '../../assets/image-film/kill-bill.jpg'
    },
  ];

  public displayFilm?: Film;

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayFilm(id: number){
    this.displayFilm = this.listFilm[id-1];
  }

}
