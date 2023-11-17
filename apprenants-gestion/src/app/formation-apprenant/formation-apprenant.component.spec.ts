import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationApprenantComponent } from './formation-apprenant.component';

describe('FormationApprenantComponent', () => {
  let component: FormationApprenantComponent;
  let fixture: ComponentFixture<FormationApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationApprenantComponent]
    });
    fixture = TestBed.createComponent(FormationApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
