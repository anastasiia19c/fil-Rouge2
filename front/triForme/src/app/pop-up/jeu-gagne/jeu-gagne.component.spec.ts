import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuGagneComponent } from './jeu-gagne.component';

describe('JeuGagneComponent', () => {
  let component: JeuGagneComponent;
  let fixture: ComponentFixture<JeuGagneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuGagneComponent]
    });
    fixture = TestBed.createComponent(JeuGagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
