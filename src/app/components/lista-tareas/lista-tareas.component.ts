import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() tarea: Tarea;
  @Output() borrarTarea: EventEmitter<Tarea> = new EventEmitter();
  @Output() completarTarea: EventEmitter<Tarea> = new EventEmitter();

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      tarea: true,
      'completed': this.tarea.completed
    };

    return classes;
  }

  onToggle(tarea) {
    tarea.completed = !tarea.completed;
    this.completarTarea.emit(tarea);
  }

  onDelete(tarea) {
    this.borrarTarea.emit(tarea);
  }

}
