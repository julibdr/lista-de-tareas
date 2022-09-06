import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareas: Tarea[] = [
    {
      id: '045464',
      title: 'Llamar a Juan',
      completed: false
    },
    {
      id: '12589',
      title: 'Hacer ejercicio',
      completed: true
    },
    {
      id: '226934',
      title: 'Preparar la comida',
      completed: false
    }
  ];
  constructor() { }

  getTareas() {
    return this.tareas;
  }

  addTarea(tarea: Tarea) {
    this.tareas.unshift(tarea);
  }
}
