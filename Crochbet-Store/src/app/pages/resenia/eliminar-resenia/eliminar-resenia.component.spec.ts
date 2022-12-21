import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReseniaComponent } from './eliminar-resenia.component';

describe('EliminarReseniaComponent', () => {
  let component: EliminarReseniaComponent;
  let fixture: ComponentFixture<EliminarReseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarReseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarReseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
