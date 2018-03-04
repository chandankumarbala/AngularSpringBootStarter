import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingComponentOneComponent } from './working-component-one.component';

describe('WorkingComponentOneComponent', () => {
  let component: WorkingComponentOneComponent;
  let fixture: ComponentFixture<WorkingComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
