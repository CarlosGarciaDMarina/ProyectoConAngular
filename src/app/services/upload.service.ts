import { Injectable } from "@angular/core"; // Importamos el inyectable para poder inyectar objetos
import { Global } from "./global";  // Configuracion de la url del API

//Decorador
@Injectable()
export class UploadService{
    // CReamos las variables
    public url: string;

    //Definimos el constructor e inicializamos las variables
    constructor(){
        this.url = Global.url;
    }

    // Este metodo nos va a permitir realizar una peticion AJAX clásica en la cual adjuntamos un archivo para subir al proyecto
    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
        // Creamos una promesa con una funcion de callback a la que le vamos a dar dos valores 
        return new Promise(function(resolve, reject){
            var formData: any = new FormData(); // Variable que simula un formulario clásico
            var xhr = new XMLHttpRequest(); // xhr es sinonimo de AJAX contiene un objeto de peticiones asíncronas

            // Recorremos el array de archivos que nos va a llegar
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name); // Adjuntamos al formulario los campos que vamos a coger del array
            }

            // Peticion AJAX, cuando hay un cambio hace una funcion
            xhr.onreadystatechange = function(){
                // Si es 4 significa que la operacion esta completada
                if(xhr.readyState == 4){
                    // Comprobamos el status
                    if(xhr.status == 200){
                        // Si es 200 ejecutamos el resolve de la promesa y hacemos un JSON.parse de la respuesta que nos devuelve el servicio
                        resolve(JSON.parse(xhr.response));
                    } else {
                        // Si no usamos el reject y le pasamos por parametro la response
                        reject(xhr.response);
                    }
                }
            }

            // Hacemos la petición por POST usando .open para hacer la petición AJAX, con el valor de la url y el último parámetro en true para que haga la petición
            xhr.open('POST', url, true);
            // Definimos que envie con .send el formulario
            xhr.send(formData);
        });
    }




}