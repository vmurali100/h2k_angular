import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  message = "I am from Child Component";

  objFromChild = {
    fname: "Murali",
    lname: "Krishna"
  };

  users = ["Murali", "Ram", "Ravi", "Sam"];
  //SendInfo Is configured with Output decorator and EventEmitter Class
  @Output() sendInfo = new EventEmitter();

  @Output() sendObj = new EventEmitter();

  @Output() sendArray = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendMessageToParent() {
    this.sendInfo.emit(this.message);

    this.sendObj.emit(this.objFromChild);

    this.sendArray.emit(this.users);
  }
}
