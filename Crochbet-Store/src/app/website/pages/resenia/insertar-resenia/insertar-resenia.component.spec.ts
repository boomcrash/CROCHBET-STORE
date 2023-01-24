import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarReseniaComponent } from './insertar-resenia.component';

describe('InsertarReseniaComponent', () => {
  let component: InsertarReseniaComponent;
  let fixture: ComponentFixture<InsertarReseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarReseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarReseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
