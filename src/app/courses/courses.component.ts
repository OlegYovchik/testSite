import { Component, OnInit } from '@angular/core';
import { CourseService } from './course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {
  public courseArr:Array<any>
  constructor(public courses: CourseService) { 
    this.courseArr = courses.getCourse()
  }
  ngOnInit() {
  }
}
