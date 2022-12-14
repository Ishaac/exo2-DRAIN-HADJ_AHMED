import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailComponent } from './liste-detail.component';

describe('ListeDetailComponent', () => {
  let component: ListeDetailComponent;
  let fixture: ComponentFixture<ListeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
