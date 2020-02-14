import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-sibling1",
  templateUrl: "./sibling1.component.html",
  styleUrls: ["./sibling1.component.css"]
})
export class Sibling1Component implements OnInit {
  message = "Hello From Sibling1";
  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  sendMessageFromSib1() {
    console.log("sendMessageFromSib1 is called");
    this.commonService.sendInfoToSib2(this.message);
  }
}
