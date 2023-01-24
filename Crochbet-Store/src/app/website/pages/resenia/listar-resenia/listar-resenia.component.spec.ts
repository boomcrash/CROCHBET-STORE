import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReseniaComponent } from './listar-resenia.component';

describe('ListarReseniaComponent', () => {
  let component: ListarReseniaComponent;
  let fixture: ComponentFixture<ListarReseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarReseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
