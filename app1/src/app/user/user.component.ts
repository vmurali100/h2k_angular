import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user = {
    email: "",
    password: ""
  };

  editUserObj = {
    email: "",
    password: "",
    city: ""
  };
  users: any = [];
  isUpdate: boolean;
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userService);
    this.getLatestData();
  }

  handleSubmit(userForm) {
    console.log(userForm.id);
    this.userService.postUsersToServer(userForm.value).subscribe(res => {
      this.getLatestData();
      userForm.reset();
    });
  }

  getLatestData() {
    this.userService.getUsersFromServer().subscribe(res => {
      this.users = res;
    });
  }

  editUser(user) {
    this.editUserObj = Object.assign({}, user);
    this.user = this.editUserObj;
    this.isUpdate = !this.isUpdate;
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(res => {
      this.getLatestData();
    });
  }

  handleupdate(userForm) {
    this.userService.updateUser(this.user).subscribe(res => {
      this.getLatestData();
      userForm.reset();
      this.isUpdate = !this.isUpdate;
    });
  }

  searchUser(search) {
    let copyUses = [...this.users];
    if (search.value.length > 0) {
      let newArray = copyUses.filter(user => {
        return user.email.indexOf(search.value) > -1;
      });
      this.users = newArray;
    } else {
      this.getLatestData();
    }
    // let newArray = this.users.filter(user => {
    //   return user.email.indexOf(search.value) > -1;
    // });
    // this.users = newArray;
  }
}
