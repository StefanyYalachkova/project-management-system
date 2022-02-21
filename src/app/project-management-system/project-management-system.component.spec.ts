import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementSystemComponent } from './project-management-system.component';

describe('ProjectManagementSystemComponent', () => {
  let component: ProjectManagementSystemComponent;
  let fixture: ComponentFixture<ProjectManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
