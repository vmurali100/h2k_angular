import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  //Creating a variable with Input decorator to receive some value
  @Input() msg;
  messageFromChild = "Hello Angular 8 ... I am from Child Component";

  //Configuring A variable with Output decorator and EventEmitter Class
  @Output() sendDetails = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendInfoToParent() {
    this.sendDetails.emit(this.messageFromChild);
  }
}
