import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEmployesComponent } from './profil-employes.component';

describe('ProfilEmployesComponent', () => {
  let component: ProfilEmployesComponent;
  let fixture: ComponentFixture<ProfilEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilEmployesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
