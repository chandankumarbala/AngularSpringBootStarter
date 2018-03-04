import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingComponentTwoComponent } from './working-component-two.component';

describe('WorkingComponentTwoComponent', () => {
  let component: WorkingComponentTwoComponent;
  let fixture: ComponentFixture<WorkingComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
