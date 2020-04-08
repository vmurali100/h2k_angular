import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app-testing-demo";
  allUsers = [
    { fname: "Murali", lname: "krishna", email: "murali@gmail.com" },
    { fname: "Ram", lname: "Sam", email: "murali@gmail.com" },
    { fname: "Ravi", lname: "Kumar", email: "Kumar@gmail.com" },
  ];
}
