import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxInscritosComponent } from './max-inscritos.component';

describe('MaxInscritosComponent', () => {
  let component: MaxInscritosComponent;
  let fixture: ComponentFixture<MaxInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxInscritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
