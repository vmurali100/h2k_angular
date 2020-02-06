import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;
  myUsers = [];
  constructor() {}

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    this.myUsers = JSON.parse(localStorage.getItem("users"));
  }

  handleSubmit() {
    this.myUsers = JSON.parse(localStorage.getItem("users"));
    this.myUsers.push(this.userForm.value);
    localStorage.setItem("users", JSON.stringify(this.myUsers));
    this.userForm.reset();
  }
}
