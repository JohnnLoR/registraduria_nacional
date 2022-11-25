import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoMesasComponent } from './candidato-mesas.component';

describe('CandidatoMesasComponent', () => {
  let component: CandidatoMesasComponent;
  let fixture: ComponentFixture<CandidatoMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoMesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
