import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sample1",
  templateUrl: "./sample1.component.html",
  styleUrls: ["./sample1.component.css"]
})
export class Sample1Component implements OnInit {
  //Seding A string to Child Component
  message = "I am From Sample 1 Component";

  // Sending A object TO Child Component

  person = {
    fname: "Murali",
    lname: "Krishna"
  };

  // Sending An Array to Child Component

  users = ["Ram", "Ravi", "Kiran", "sam"];

  constructor() {}

  ngOnInit() {}
}
