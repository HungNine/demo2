import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  person = {
    name: 'boy',
    password: '123'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
