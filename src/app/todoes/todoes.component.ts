import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todoes',
  templateUrl: './todoes.component.html',
  styleUrls: ['./todoes.component.scss'],
})
export class TodoesComponent implements OnInit {
  @Input() todoes: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: number) {
    this.todoes = this.todoes.filter((todo) => todo.id !== id);
    console.log(this.todoes);
  }
}
