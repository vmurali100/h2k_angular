import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  @Input() users: any;
  @Output() sendUser = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  editUser(user, i) {
    console.log(i);
    let userInfo = {
      user,
      i
    };
    this.sendUser.emit(userInfo);
  }
}
