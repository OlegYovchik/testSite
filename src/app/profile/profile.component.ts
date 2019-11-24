import { Component, OnInit } from '@angular/core';
import { ScoolService } from '../profile/scool.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ScoolService],
})
export class ProfileComponent implements OnInit {

  objectives = [
    "Getting the Junior FrontEnd Developer position",
    "To find a self-realization and career advancement",
    "To use my special knowledge and professional experience for progress of software development company business"
  ]
  skills = [
    "Successful experience working with a team",
    "Easy learning",
    "Attentiveness",
    "Seek to work for the result",
    "High quality tasks performance"
  ]

  public scools: Array<any>

  constructor(private scoolService: ScoolService){
    this.scools = scoolService.getScool()
  }
  ngOnInit() {
  }

}
