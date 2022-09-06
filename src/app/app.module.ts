import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AddTareaComponent,
    HeaderComponent,
    ListaTareasComponent
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
