import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadoweeListComponent } from './shadowee-list.component';

describe('ShadoweeListComponent', () => {
  let component: ShadoweeListComponent;
  let fixture: ComponentFixture<ShadoweeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadoweeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadoweeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
