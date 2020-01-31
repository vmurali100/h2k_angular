import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  messageFromChild;
  // objFromChild = {
  //   fname: "",
  //   lname: ""
  // };
  objFromChild;
  constructor() {}

  ngOnInit() {}

  receieveMessageFromChild(message) {
    console.log(message);
    this.messageFromChild = message;
  }

  receiveObj(obj) {
    this.objFromChild = obj;
  }
}
