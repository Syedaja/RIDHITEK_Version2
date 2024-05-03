import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamsComponent } from './about-teams.component';

describe('AboutTeamsComponent', () => {
  let component: AboutTeamsComponent;
  let fixture: ComponentFixture<AboutTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
