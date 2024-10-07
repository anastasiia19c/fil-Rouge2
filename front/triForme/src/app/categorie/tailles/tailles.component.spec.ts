import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaillesComponent } from './tailles.component';

describe('TaillesComponent', () => {
  let component: TaillesComponent;
  let fixture: ComponentFixture<TaillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaillesComponent]
    });
    fixture = TestBed.createComponent(TaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
