import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-library";
  data = [
    { fname: "Murali", lname: "Krishna", email: "vmurali@gmail.com" },
    { fname: "Ram", lname: "Ravi", email: "ram@gmail.com" },
    { fname: "Sam", lname: "K", email: "sa@gmail.com" },
  ];
  constructor() {}
}
