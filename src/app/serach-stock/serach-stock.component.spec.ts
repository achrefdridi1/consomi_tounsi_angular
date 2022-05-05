import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachStockComponent } from './serach-stock.component';

describe('SerachStockComponent', () => {
  let component: SerachStockComponent;
  let fixture: ComponentFixture<SerachStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
