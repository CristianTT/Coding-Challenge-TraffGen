import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuponesComponent } from './lista-cupones.component';

describe('ListaCuponesComponent', () => {
  let component: ListaCuponesComponent;
  let fixture: ComponentFixture<ListaCuponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCuponesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
