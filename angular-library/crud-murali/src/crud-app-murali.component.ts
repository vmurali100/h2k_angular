import { Component, Input } from "@angular/core";

@Component({
  selector: "crud-app-murali",
  template: `<table class="table table-striped">
    <thead>
      <tr>
        <th>First</th>
        <th>Last</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users; let i = index">
        <td>{{ user.fname }}</td>
        <td>{{ user.lname }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button class="btn btn-warning" (click)="editUser(user)">Edit</button>
        </td>
        <td>
          <button class="btn btn-danger" (click)="deleteUser(i)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>`,
})
export class CrudAppMuraliComponent {
  @Input() users;

  editUser(user) {
    console.log(user);
  }
  deleteUser(i) {
    this.users.splice(i, 1);
  }
}
