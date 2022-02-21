import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './tasks';
import { TASKS } from './mock-tasks';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(projectName: string): Observable<Task[]> {
    const foundProject = PROJECTS.find(project => {
      return project.name === projectName;
    })
    if (foundProject){
    const tasks = of(TASKS.filter(task => foundProject.tasks.includes(task.title)));
    this.messageService.add('TasksService: fetched tasks');
    return tasks;
    }
    return of([]);
  }

  getTask(title: string) : Observable<Task>{
    const task = TASKS.find(t => t.title === title)!;
    this.messageService.add(`TaskService: fetched task ${title}`);
    return of(task);
  }
  constructor(private messageService: MessageService) { }
}
