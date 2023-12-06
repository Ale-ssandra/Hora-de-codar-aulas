import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosNoTemplateComponent } from './dados-no-template.component';

describe('DadosNoTemplateComponent', () => {
  let component: DadosNoTemplateComponent;
  let fixture: ComponentFixture<DadosNoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosNoTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosNoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
