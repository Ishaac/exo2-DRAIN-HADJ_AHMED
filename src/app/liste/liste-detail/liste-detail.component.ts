import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/model/film.model';

@Component({
  selector: 'app-liste-detail',
  templateUrl: './liste-detail.component.html',
  styleUrls: ['./liste-detail.component.scss']
})
export class ListeDetailComponent implements OnInit {

  @Input() public film!: Film;

  @Output() newItemEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public changeDisplayFilm(id: number){
    this.newItemEvent.emit(this.film.id);
  }

}
