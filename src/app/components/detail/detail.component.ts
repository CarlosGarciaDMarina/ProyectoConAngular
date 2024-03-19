import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects'; // Importamos el proyecto
import { ProjectService } from '../../services/project.service'; // Importamos los servicios
import { Global } from '../../services/global'; // Importamos Global para conseguir la URL
import { ProjectsComponent } from '../projects/projects.component';
import { Router, ActivatedRoute, Params } from '@angular/router'; // Lo necesitamos para poder acceder al id del proyecto

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.project = new Project("","","","",0,"","");
    this.confirm = false;

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
        let id = params['id'];

        this.getProject(id);
    });
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project= response.project;
      }, 
      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.projectRemoved){
          this._router.navigateByUrl('proyectos');
        }
      }, 
      error => {
        console.log(<any>error);
      }
    );
  }


}
