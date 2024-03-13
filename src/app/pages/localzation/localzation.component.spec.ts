import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalzationComponent } from './localzation.component';

describe('LocalzationComponent', () => {
  let component: LocalzationComponent;
  let fixture: ComponentFixture<LocalzationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalzationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalzationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
