import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprenantComponent } from './view-apprenant.component';

describe('ViewApprenantComponent', () => {
  let component: ViewApprenantComponent;
  let fixture: ComponentFixture<ViewApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewApprenantComponent]
    });
    fixture = TestBed.createComponent(ViewApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
