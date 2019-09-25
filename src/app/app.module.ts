import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/board',
    pathMatch: 'full'
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: '**',
    redirectTo: '/board',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CategoryDetailComponent,
    FooterComponent,
    TaskDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
