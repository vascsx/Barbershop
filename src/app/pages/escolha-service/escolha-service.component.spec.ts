import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaServiceComponent } from './escolha-service.component';

describe('EscolhaServiceComponent', () => {
  let component: EscolhaServiceComponent;
  let fixture: ComponentFixture<EscolhaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolhaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
