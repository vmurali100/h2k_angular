import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
var CrudAppMuraliComponent = /** @class */ (function () {
    function CrudAppMuraliComponent() {
    }
    CrudAppMuraliComponent.prototype.editUser = function (user) {
        console.log(user);
    };
    CrudAppMuraliComponent.prototype.deleteUser = function (i) {
        this.users.splice(i, 1);
    };
    __decorate([
        Input()
    ], CrudAppMuraliComponent.prototype, "users", void 0);
    CrudAppMuraliComponent = __decorate([
        Component({
            selector: "crud-app-murali",
            template: "<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>First</th>\n        <th>Last</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users; let i = index\">\n        <td>{{ user.fname }}</td>\n        <td>{{ user.lname }}</td>\n        <td>{{ user.email }}</td>\n        <td>\n          <button class=\"btn btn-warning\" (click)=\"editUser(user)\">Edit</button>\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteUser(i)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>"
        })
    ], CrudAppMuraliComponent);
    return CrudAppMuraliComponent;
}());
export { CrudAppMuraliComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC1hcHAtbXVyYWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NydWQtbXVyYWxpLyIsInNvdXJjZXMiOlsic3JjL2NydWQtYXBwLW11cmFsaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkJqRDtJQUFBO0lBU0EsQ0FBQztJQU5DLHlDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsMkNBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFO3lEQUFPO0lBREosc0JBQXNCO1FBekJsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSw2bEJBcUJEO1NBQ1YsQ0FBQztPQUNXLHNCQUFzQixDQVNsQztJQUFELDZCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjcnVkLWFwcC1tdXJhbGlcIixcclxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aD5GaXJzdDwvdGg+XHJcbiAgICAgICAgPHRoPkxhc3Q8L3RoPlxyXG4gICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICA8dHIgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8dGQ+e3sgdXNlci5mbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgPHRkPnt7IHVzZXIubG5hbWUgfX08L3RkPlxyXG4gICAgICAgIDx0ZD57eyB1c2VyLmVtYWlsIH19PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgKGNsaWNrKT1cImVkaXRVc2VyKHVzZXIpXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZVVzZXIoaSlcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90Ym9keT5cclxuICA8L3RhYmxlPmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcnVkQXBwTXVyYWxpQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB1c2VycztcclxuXHJcbiAgZWRpdFVzZXIodXNlcikge1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgfVxyXG4gIGRlbGV0ZVVzZXIoaSkge1xyXG4gICAgdGhpcy51c2Vycy5zcGxpY2UoaSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==