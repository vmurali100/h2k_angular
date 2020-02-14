import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  message;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.receiveAndSend.subscribe(info => {
      this.message = info;
    });
  }
}
