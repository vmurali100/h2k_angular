import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  users: any;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getData().subscribe(res => {
      this.users = res;
    });
  }
}
