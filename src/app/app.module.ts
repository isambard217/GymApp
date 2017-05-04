import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FacebookLoginComponent } from './component/facebooklogin/facebooklogin.component';
import { CourseComponentComponent } from './component/course-component/course-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookLoginComponent,
    CourseComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
