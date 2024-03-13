import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService]
})
export class CreateComponent {

  public title: string;
  public project: Project;


  constructor(
    private _projectService: ProjectService

  ) {
    this.title = "Carlos García de Marina";
    this.project = new Project('', '', '', '', 2024, '','');
  }
  
  ngOnInit() {

  }

  onSubmit(form:any){
    console.log(this.project);
  }


}
