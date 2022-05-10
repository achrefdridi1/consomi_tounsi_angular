import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlivreurComponent } from './editlivreur.component';

describe('EditlivreurComponent', () => {
  let component: EditlivreurComponent;
  let fixture: ComponentFixture<EditlivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
