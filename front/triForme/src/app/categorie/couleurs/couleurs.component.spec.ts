import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleursComponent } from './couleurs.component';

describe('CouleursComponent', () => {
  let component: CouleursComponent;
  let fixture: ComponentFixture<CouleursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouleursComponent]
    });
    fixture = TestBed.createComponent(CouleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
