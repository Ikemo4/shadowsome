import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadoweeProfileComponent } from './shadowee-profile.component';

describe('ShadoweeProfileComponent', () => {
  let component: ShadoweeProfileComponent;
  let fixture: ComponentFixture<ShadoweeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadoweeProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadoweeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
