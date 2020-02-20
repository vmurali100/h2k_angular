import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  userForm;
  index;
  users = [];
  isEdit = false;
  constructor() {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
    if (this.users == null) {
      this.users = [];
    }
    this.userForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      city: new FormControl()
    });
  }
  addUser(userForm) {
    this.users.push(userForm.value);
    localStorage.setItem("users", JSON.stringify(this.users));
    userForm.reset();
  }

  editUser(user, i) {
    this.isEdit = true;
    this.index = i;
    this.userForm.setValue(user);
  }

  deleteUser(i) {
    this.users.splice(i, 1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  updateUser() {
    this.users[this.index] = this.userForm.value;
    this.isEdit = false;
    localStorage.setItem("users", JSON.stringify(this.users));
    this.userForm.reset();
  }
}
