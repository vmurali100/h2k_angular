import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

var CrudAppMuraliComponent = /** @class */ (function () {
    function CrudAppMuraliComponent() {
    }
    CrudAppMuraliComponent.prototype.editUser = function () { };
    CrudAppMuraliComponent.prototype.deleteUser = function (i) {
        this.users.splice(i, 1);
    };
    __decorate([
        Input()
    ], CrudAppMuraliComponent.prototype, "users", void 0);
    CrudAppMuraliComponent = __decorate([
        Component({
            selector: "crud-app-murali",
            template: "<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>First</th>\n        <th>Last</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users; let i = index\">\n        <td>{{ user.fname }}</td>\n        <td>{{ user.lname }}</td>\n        <td>{{ user.email }}</td>\n        <td>\n          <button class=\"btn btn-warning\" (click)=\"editUser()\">Edit</button>\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteUser(i)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>"
        })
    ], CrudAppMuraliComponent);
    return CrudAppMuraliComponent;
}());

var CrudAppMuraliModule = /** @class */ (function () {
    function CrudAppMuraliModule() {
    }
    CrudAppMuraliModule = __decorate([
        NgModule({
            declarations: [CrudAppMuraliComponent],
            imports: [BrowserModule],
            exports: [CrudAppMuraliComponent, BrowserModule],
        })
    ], CrudAppMuraliModule);
    return CrudAppMuraliModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CrudAppMuraliComponent, CrudAppMuraliModule };
//# sourceMappingURL=crud-murali.js.map
