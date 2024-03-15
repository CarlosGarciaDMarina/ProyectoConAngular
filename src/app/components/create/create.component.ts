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
  public status: string = "";


  constructor(
    private _projectService: ProjectService

  ) {
    this.title = "Carlos García de Marina";
    this.project = new Project('', '', '', '', 2024, '','');
  }
  
  ngOnInit() {

  }

  // Método 
  onSubmit(form:any){
    console.log(this.project);
    // Utilizamos el método saveProject que hemos creado en projectService, le pasamos el project y utilizamos el metodo subscribe para recoger la respuesta
    this._projectService.saveProject(this.project).subscribe( // Subscribe tiene 2 funciones de callback
      response => {
        //Recogemos la respuesta
        if(response.project){
          // Si me llega la respuesta 
          this.status = "succes";
          form.reset(); // método para vaciar el formulario
        } else {
          // Si no me llega
          this.status = "failed";
        }
      }, 
      error => {
        // Recogemos el error y lo mostramos en la consola
        console.log(error);
      } 
    );
  }



}
