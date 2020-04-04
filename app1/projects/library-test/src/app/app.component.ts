import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "library-test";
  data = [
    { fname: "Ram", lname: "Ravi", email: "ram@gamil.com" },
    { fname: "sam", lname: "sam", email: "ram@gamil.com" },
    { fname: "Hari", lname: "Ravi", email: "ram@gamil.com" },
  ];
}
