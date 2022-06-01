import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoesComponent } from './todoes/todoes.component';
import { TodoComponent } from './todoes/todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TitleComponent } from './title/title.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoesComponent,
    TodoComponent,
    TodoAddComponent,
    TitleComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
