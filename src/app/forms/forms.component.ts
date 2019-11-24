import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User } from '../../User';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})



export class FormsComponent implements OnInit {
  constructor(private http: Http){}

  public item

  public itemArray: [];

  public model: User = new User('','','','','');

  public roles = ["Guest", "Administrator", "User"];

  private url = "http://localhost:2403/users";

  public getUsers() {
    let self = this
    fetch(self.url)
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        alert(JSON.stringify(myJson));
        self.item = JSON.stringify(myJson);
      })
  }
  public addUser(){
      fetch(this.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(this.model)
    }).then(res => res.json())
    .then(response => console.log('Успех:', JSON.stringify(response)))
    .catch(error => console.error('Ошибка:', error));
  }

  
  ngOnInit() {
  }

}
