import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  infoFrom;
  // declaring a message at Parent Component
  message = "Hello to Angular ";
  title = "app2";

  receiveInfo(info) {
    this.infoFrom = info;
  }
}
