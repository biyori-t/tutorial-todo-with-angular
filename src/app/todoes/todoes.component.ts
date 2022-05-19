import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoes',
  templateUrl: './todoes.component.html',
  styleUrls: ['./todoes.component.scss'],
})
export class TodoesComponent implements OnInit {
  @Input() todoes: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
