import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLandingComponent } from './intro-landing.component';

describe('IntroLandingComponent', () => {
  let component: IntroLandingComponent;
  let fixture: ComponentFixture<IntroLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
