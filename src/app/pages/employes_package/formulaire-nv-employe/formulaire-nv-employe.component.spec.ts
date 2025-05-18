import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNvEmployeComponent } from './formulaire-nv-employe.component';

describe('FormulaireNvEmployeComponent', () => {
  let component: FormulaireNvEmployeComponent;
  let fixture: ComponentFixture<FormulaireNvEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireNvEmployeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireNvEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
