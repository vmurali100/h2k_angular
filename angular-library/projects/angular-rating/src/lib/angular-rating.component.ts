import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-angular-rating",
  template: `
    <p>
      angular-rating works!
      <button (click)="buttonClick()">Click Me</button>
    </p>
  `,
  styles: []
})
export class AngularRatingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    console.log("buttonClick clicked");
  }
}
