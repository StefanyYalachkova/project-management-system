import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProjectsComponent } from './projects';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects() : Observable<ProjectsComponent[]>{
    const projects = of(PROJECTS);
    this.messageService.add(`ProjectService: fetched projects`);
    return projects;
  }

  getProject(name: string): Observable<ProjectsComponent>{
    const project = PROJECTS.find(p => p.name === name)!;
    this.messageService.add(`ProjectService: fetched project ${name}`);
    return of(project);
  }
  constructor(private messageService: MessageService) { }
}
