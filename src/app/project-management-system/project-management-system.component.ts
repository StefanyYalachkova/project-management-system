import { Component, OnInit } from '@angular/core';

import { ProjectsComponent } from '../projects';
import { PROJECTS } from '../mock-projects';
import { ProjectService } from '../project.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-project-management-system',
  templateUrl: './project-management-system.component.html',
  styleUrls: ['./project-management-system.component.css']
})
export class ProjectManagementSystemComponent implements OnInit {

  projects: ProjectsComponent[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
