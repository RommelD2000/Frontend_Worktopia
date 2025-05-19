import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEmployesComponent } from './interface-employes.component';

describe('InterfaceEmployesComponent', () => {
  let component: InterfaceEmployesComponent;
  let fixture: ComponentFixture<InterfaceEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceEmployesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
