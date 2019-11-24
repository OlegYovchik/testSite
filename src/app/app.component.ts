import { Component } from '@angular/core';
import { ScoolService } from './profile/scool.service';
import { CourseService } from './courses/course-service.service';

// import { MainComponent } from './main/main.component';

@Component({
  // providers: [MainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScoolService, CourseService]
})
export class AppComponent {

  // constructor( comp: MainComponent){
  //   comp.start()
  //   comp.boolean=true;
  // }    

  ngOnInit(){
  }
  
}
