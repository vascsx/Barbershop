import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoServicosComponent } from './catalogo-servicos.component';

describe('CatalogoServicosComponent', () => {
  let component: CatalogoServicosComponent;
  let fixture: ComponentFixture<CatalogoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
