import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  agregar = false;
  tareas: Tarea[];
  total: number = 0;
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareas = this.tareaService.getTareas();
  }

  borrarTarea(tarea: Tarea) {
    this.tareas = this.tareas.filter(i => i.id != tarea.id);
  }

  addTarea(tarea: Tarea) {
    console.log(tarea);
    this.tareaService.addTarea(tarea);
  }
  agregarTarea() {
    this.agregar = !this.agregar;
  }
}
