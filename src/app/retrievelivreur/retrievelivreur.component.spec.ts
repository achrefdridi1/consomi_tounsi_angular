import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievelivreurComponent } from './retrievelivreur.component';

describe('RetrievelivreurComponent', () => {
  let component: RetrievelivreurComponent;
  let fixture: ComponentFixture<RetrievelivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievelivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievelivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
