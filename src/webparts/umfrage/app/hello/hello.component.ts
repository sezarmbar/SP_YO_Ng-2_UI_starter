import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spapp-hello',
  template: `
  <input #desc type="text" (change)="changeName(desc.value)" required/>
  <p>Welcom {{name}}</p>

  `,
  // templateUrl: './hello.component.module.html'
})
export class HelloComponent implements OnInit {
  private name: String = 'please enter your name above !';
  // tslint:disable-next-line:typedef
  changeName(inputVal): void {
    this.name = inputVal;
  }
  constructor() { }

  ngOnInit() { }

}
