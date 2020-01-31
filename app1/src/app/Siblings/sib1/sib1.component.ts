import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-sib1",
  templateUrl: "./sib1.component.html",
  styleUrls: ["./sib1.component.css"]
})
export class Sib1Component implements OnInit {
  message = "Messge From Sib1";

  person = {
    fname: "Ram",
    lname: "Kumar"
  };

  users = ["Ravi", "Kumar", "Kiran", "Vijay"];

  // Adding common service as a dependency
  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  sendDataToSib2() {
    this.commonService.sendInfoToSib2(this.message);
    console.log("sendDataToSib2");
  }
}
