import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-sib2",
  templateUrl: "./sib2.component.html",
  styleUrls: ["./sib2.component.css"]
})
export class Sib2Component implements OnInit {
  messageFromSib1;
  //Adding the As a dependency
  constructor(private commonService: CommonService) {}

  //this is the method which is Called At the time of Rendering or Whenever compont is Updated
  ngOnInit() {
    this.commonService.exchangeMessage.subscribe(response => {
      console.log(response);
      this.messageFromSib1 = response;
    });
  }
}
