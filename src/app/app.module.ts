import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { FooterComponent } from './footer/footer.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { HeaderComponent } from './header/header.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { EditTaskModalWindowComponent } from './edit-task-modal-window/edit-task-modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CategoryDetailComponent,
    FooterComponent,
    TaskDetailComponent,
    HeaderComponent,
    EditTaskModalWindowComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    DragDropModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }
    ),
    [LoggerModule.forRoot(
      {
        serverLoggingUrl: '/api/logs',
        level: NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.ERROR,
        disableConsoleLogging: false
      }
    )]
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:  [
    EditTaskModalWindowComponent
  ]
})
export class AppModule {
}
