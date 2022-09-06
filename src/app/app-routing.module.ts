import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TareasComponent} from './components/tareas/tareas.component';
import {AddTareaComponent} from './components/add-tarea/add-tarea.component';

const routes: Routes = [
  {
    path: '',
    component: TareasComponent
  },
  {
    path:'add',
    component: AddTareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
