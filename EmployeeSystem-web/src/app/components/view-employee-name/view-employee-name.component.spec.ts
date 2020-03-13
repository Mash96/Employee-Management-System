import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeNameComponent } from './view-employee-name.component';

describe('ViewEmployeeNameComponent', () => {
  let component: ViewEmployeeNameComponent;
  let fixture: ComponentFixture<ViewEmployeeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
