import { CourseComponentComponent } from './component/course-component/course-component.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [CourseComponentComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
