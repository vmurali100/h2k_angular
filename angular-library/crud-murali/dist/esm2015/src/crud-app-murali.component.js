import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
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
export { CrudAppMuraliComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC1hcHAtbXVyYWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NydWQtbXVyYWxpLyIsInNvdXJjZXMiOlsic3JjL2NydWQtYXBwLW11cmFsaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkJqRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUdqQyxRQUFRLEtBQUksQ0FBQztJQUNiLFVBQVUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBTlU7SUFBUixLQUFLLEVBQUU7cURBQU87QUFESixzQkFBc0I7SUF6QmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FxQkQ7S0FDVixDQUFDO0dBQ1csc0JBQXNCLENBT2xDO1NBUFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjcnVkLWFwcC1tdXJhbGlcIixcclxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aD5GaXJzdDwvdGg+XHJcbiAgICAgICAgPHRoPkxhc3Q8L3RoPlxyXG4gICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICA8dHIgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8dGQ+e3sgdXNlci5mbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgPHRkPnt7IHVzZXIubG5hbWUgfX08L3RkPlxyXG4gICAgICAgIDx0ZD57eyB1c2VyLmVtYWlsIH19PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgKGNsaWNrKT1cImVkaXRVc2VyKClcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwiZGVsZXRlVXNlcihpKVwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENydWRBcHBNdXJhbGlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHVzZXJzO1xyXG5cclxuICBlZGl0VXNlcigpIHt9XHJcbiAgZGVsZXRlVXNlcihpKSB7XHJcbiAgICB0aGlzLnVzZXJzLnNwbGljZShpLCAxKTtcclxuICB9XHJcbn1cclxuIl19