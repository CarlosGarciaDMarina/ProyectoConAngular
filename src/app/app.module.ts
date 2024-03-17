import { NgModule } from '@angular/core'; // Importa el módulo NgModule de Angular para definir módulos
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo BrowserModule de Angular para habilitar la funcionalidad del navegador
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule de Angular para permitir hacer peticiones HTTP
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule de Angular para trabajar con formularios en la aplicación
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento de la aplicación

// Importar los componentes
import { AppComponent } from './app.component'; // Importa el componente principal de la aplicación
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
