import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

let CrudAppMuraliComponent = class CrudAppMuraliComponent {
    editUser() { }
    deleteUser(i) {
        this.users.splice(i, 1);
    }
};
__decorate([
    Input()
], CrudAppMuraliComponent.prototype, "users", void 0);
CrudAppMuraliComponent = __decorate([
    Component({
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
          <button class="btn btn-warning" (click)="editUser()">Edit</button>
        </td>
        <td>
          <button class="btn btn-danger" (click)="deleteUser(i)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>`
    })
], CrudAppMuraliComponent);

let CrudAppMuraliModule = class CrudAppMuraliModule {
};
CrudAppMuraliModule = __decorate([
    NgModule({
        declarations: [CrudAppMuraliComponent],
        imports: [BrowserModule],
        exports: [CrudAppMuraliComponent, BrowserModule],
    })
], CrudAppMuraliModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CrudAppMuraliComponent, CrudAppMuraliModule };
//# sourceMappingURL=crud-murali.js.map
