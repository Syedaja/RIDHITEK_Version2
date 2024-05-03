import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutHeroComponent } from './new-about-hero.component';

describe('NewAboutHeroComponent', () => {
  let component: NewAboutHeroComponent;
  let fixture: ComponentFixture<NewAboutHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAboutHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAboutHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
