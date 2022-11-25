import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosMesaComponent } from './candidatos-mesa.component';

describe('CandidatosMesaComponent', () => {
  let component: CandidatosMesaComponent;
  let fixture: ComponentFixture<CandidatosMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
