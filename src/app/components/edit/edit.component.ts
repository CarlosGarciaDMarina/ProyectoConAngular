import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service'; // Cargamos el servicio para utilizar la funcion 
import { Global } from '../../services/global'; // Importamos Global para utilizar la url
import { Router, ActivatedRoute, Params } from '@angular/router'; // Lo necesitamos para poder acceder al id del proyecto


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrl: './edit.component.css',
  providers: [
    ProjectService,
    UploadService // Cargamos el servicio 
  ]
})
export class EditComponent implements OnInit {

  public url: string;
  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = "";
  public filesToUpload: Array<File> = [];


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService, // Cargamos la propiedad en la clase
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    this.url = Global.url;
    this.title = "Editar Proyecto";
    this.project = new Project('', '', '', '', 2024, '','');
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

    // Método 
    onSubmit(form:any){
      /* Guardar los datos básicos */
      // Utilizamos el método updateProject que hemos creado en projectService, le pasamos el project y utilizamos el metodo subscribe para recoger la respuesta
      this._projectService.updateProject(this.project).subscribe( // Subscribe tiene 2 funciones de callback
        response => {
          //Recogemos la respuesta
          if(response.projectUpdated){
            // Si me llega la respuesta 
            if(this.filesToUpload){
              /* Hace el update */
              this._uploadService.makeFileRequest(Global.url + "upload-image/"+response.projectUpdated._id, [],this.filesToUpload, 'image')
              .then((result:any) => {  
                  this.save_project = result.project;
                  this.status = "succes";
              }); 
            } else {
              this.save_project = response.project;
              this.status = "succes";
            }
          } else {
            // Si no me llega
            console.log(response);
            this.status = "failed";
          }
        }, 
        error => {
          // Recogemos el error y lo mostramos en la consola
          console.log(error);
        } 
      );
    }
  
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  
    }

}
