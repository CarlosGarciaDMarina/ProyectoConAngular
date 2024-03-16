import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service'; // Cargamos el servicio para utilizar la funcion 
import { Global } from '../../services/global'; // Importamos Global para utilizar la url

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [
    ProjectService,
    UploadService // Cargamos el servicio 
  ]
})
export class CreateComponent {

  public title: string;
  public project: Project;
  public status: string = "";
  public filesToUpload: Array<File> = [];


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService // Cargamos la propiedad en la clase

  ) {
    this.title = "Carlos García de Marina";
    this.project = new Project('', '', '', '', 2024, '','');
  }
  
  ngOnInit() {

  }

  // Método 
  onSubmit(form:any){
    
    /* Guardar los datos básicos */
    // Utilizamos el método saveProject que hemos creado en projectService, le pasamos el project y utilizamos el metodo subscribe para recoger la respuesta
    this._projectService.saveProject(this.project).subscribe( // Subscribe tiene 2 funciones de callback
      response => {
        //Recogemos la respuesta
        if(response.project){
          // Si me llega la respuesta 

          /* Subir la imagen */
          this._uploadService.makeFileRequest(Global.url + "upload-image/"+response.project._id, [],this.filesToUpload, 'image')
          .then((result:any) => {
              this.status = "succes";
              console.log(result);
              form.reset(); // método para vaciar el formulario
          });

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


  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }



}
