import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowPostingComponent } from './shadow-posting.component';

describe('ShadowPostingComponent', () => {
  let component: ShadowPostingComponent;
  let fixture: ComponentFixture<ShadowPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
