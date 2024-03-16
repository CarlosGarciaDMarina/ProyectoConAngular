import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects'; // Imporamos el proyecto
import { ProjectService } from '../../services/project.service'; // Importamos los servicios
import { Global } from '../../services/global'; // Importamos Global para conseguir la URL

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [
    ProjectService // cargamos el servicio
  ]

})
export class ProjectsComponent {

  public projects: Project[] = [];
  public url: string;

  constructor(
    private _projectService: ProjectService //Cargamos el servicio en el constructor para inyectar el objeto
  ){
    this.url = Global.url;
  }

  // Este método se ejecuta nada mas cargar el proyecto
  ngOnInit(){
    this.getProjects();

  }

  // Método para obtener los proyectos de la base de datos 
  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}
