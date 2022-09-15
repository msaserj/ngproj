import { Component } from '@angular/core';

@Component({
  selector: 'ngproj-test6',
  template: `
    <h1 class="title1">Test 7</h1>
    <h2 class="title2">Test 7</h2>
  `,
  styles: [
    `
      .title1 {
        color: red;
      }

      .title2 {
        color: gold;
      }
    `,
  ],
})
export class Test6Component {
  constructor() {}
}
