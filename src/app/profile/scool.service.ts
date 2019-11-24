import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoolService {

  constructor(){}
    public getScool(): Array<any>{
      return [
        {year: "2003-2008", scool: "Kyiv National University of Trade and Economics",specialty: "Custom Management"},
        {year: "2019", scool: "CyberBionic Systematics", specialty: "Frontend Developer"}
      ];
    }
}
