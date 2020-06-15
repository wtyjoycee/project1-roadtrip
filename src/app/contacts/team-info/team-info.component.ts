import { Component, OnInit } from '@angular/core';
import { Theteam } from './Theteam.model';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teams: Theteam[] = [
    new Theteam(
      'A CAT',
      'I am a cut cat',
      '1234568@qq.com',
      'assets/IMG_4921.JPG',
    ) ,
    new Theteam(
      'A CAT',
      'I am a cut cat',
      '1234568@qq.com',
      'assets/IMG_4921.JPG',
    ) ,
    new Theteam(
      'A CAT',
      'I am a cut cat',
      '1234568@qq.com',
      'assets/IMG_4921.JPG',
    ) ,
    new Theteam(
      'A CAT',
      'I am a cut cat',
      '1234568@qq.com',
      'assets/IMG_4921.JPG',
    ) 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
