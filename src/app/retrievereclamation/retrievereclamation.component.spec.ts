import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievereclamationComponent } from './retrievereclamation.component';

describe('RetrievereclamationComponent', () => {
  let component: RetrievereclamationComponent;
  let fixture: ComponentFixture<RetrievereclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievereclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
