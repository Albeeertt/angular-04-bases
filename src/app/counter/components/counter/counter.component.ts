import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="suma(1)" >+1</button>
  <button (click)="suma(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `,

})
export class CounterComponent {
  public counter: number = 10;

  public suma = (value: number): void =>  {this.counter += value};
  reset():void {
    this.counter = 10;
  };

  constructor() {}


}
