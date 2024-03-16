import { Injectable } from "@angular/core"; // Libreria para inyectar servicios
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Libreria para hacer peticiones AJAX
import { Observable } from "rxjs"; // Librería para manejar flujos de datos asincrónicos
import { Project } from "../models/projects"; // Importa el modelo de datos Project
import { Global } from "./global" // Importa el archivo global.ts que contiene variables globales

@Injectable()
export class ProjectService{
    public url:string; // Aquí guardaremos la URL de nuestra API

    constructor (
        private _http: HttpClient // Cargamos el HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    // Método para guardar un proyecto en la base de datos
    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project); // Guardara los datos que le pasemos en formato JSON
        let headers = new HttpHeaders().set('Content-Type','application/json'); // Establecemos las cabeceras (como se va a enviar la información)

        // Para dar de alta algo en el API necesitamos usar el siguiente metodo
        return this._http.post(this.url + 'save-project', params, {headers: headers}); // le pasamos la url de nuestra API, le concatenamos el metodo de la api, le pasamos los params y los headers
    }

    // Método para obtener los proyectos de la base de datos 
    getProjects(): Observable<any>{
        // Creamos una variable para enviar la información en formato json
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // Hacemos la peticion AJAX por GET
        return this._http.get(this.url + 'projects', {headers: headers});
    }


}