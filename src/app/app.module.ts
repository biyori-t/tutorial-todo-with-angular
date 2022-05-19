import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoesComponent } from './todoes/todoes.component';
import { TodoComponent } from './todoes/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoesComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
