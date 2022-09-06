import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {
  id: string;
  title: string;
  @Output() addTarea: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private tareaService: TareaService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const tarea = new Tarea();
    tarea.id = this.id;
    tarea.title = this.title;
    tarea.completed = false;
    this.tareaService.addTarea(tarea);
  }

}
