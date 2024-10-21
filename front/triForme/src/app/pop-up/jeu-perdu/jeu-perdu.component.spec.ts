import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuPerduComponent } from './jeu-perdu.component';

describe('JeuPerduComponent', () => {
  let component: JeuPerduComponent;
  let fixture: ComponentFixture<JeuPerduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuPerduComponent]
    });
    fixture = TestBed.createComponent(JeuPerduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
