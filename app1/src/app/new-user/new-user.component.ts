import { Component, OnInit } from "@angular/core";
import { DynamicService } from "../dynamic.service";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  records = 10;
  fname = "";
  constructor(private dynamic_service: DynamicService) {}

  ngOnInit() {}

  getDataFromServer() {
    this.dynamic_service.getData(this.records, null);
  }
  getSelectedData() {
    this.dynamic_service.getData(this.records, this.fname);
  }
}
