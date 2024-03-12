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


}