import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {FooterComponent} from './footer/footer.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {TaskStatusDetailComponent} from './task-status-detail/task-status-detail.component';

@NgModule({
  declarations: [
    AppComponent, BoardComponent, TaskDetailComponent,
    TaskStatusDetailComponent, FooterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule,
    MatDividerModule, MatListModule, MatToolbarModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
