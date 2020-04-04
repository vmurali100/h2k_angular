import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CrudAppMuraliComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵelementStart(1, "td");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "td");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "td");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "td");
    ɵngcc0.ɵɵelementStart(8, "button", 2);
    ɵngcc0.ɵɵlistener("click", function CrudAppMuraliComponent_tr_10_Template_button_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.editUser(); });
    ɵngcc0.ɵɵtext(9, "Edit");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "td");
    ɵngcc0.ɵɵelementStart(11, "button", 3);
    ɵngcc0.ɵɵlistener("click", function CrudAppMuraliComponent_tr_10_Template_button_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.deleteUser(i_r2); });
    ɵngcc0.ɵɵtext(12, "Delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(user_r1.fname);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(user_r1.lname);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(user_r1.email);
} }
let CrudAppMuraliComponent = class CrudAppMuraliComponent {
    editUser() { }
    deleteUser(i) {
        this.users.splice(i, 1);
    }
};
CrudAppMuraliComponent.ɵfac = function CrudAppMuraliComponent_Factory(t) { return new (t || CrudAppMuraliComponent)(); };
CrudAppMuraliComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CrudAppMuraliComponent, selectors: [["crud-app-murali"]], inputs: { users: "users" }, decls: 11, vars: 1, consts: [[1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function CrudAppMuraliComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "thead");
        ɵngcc0.ɵɵelementStart(2, "tr");
        ɵngcc0.ɵɵelementStart(3, "th");
        ɵngcc0.ɵɵtext(4, "First");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "th");
        ɵngcc0.ɵɵtext(6, "Last");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "th");
        ɵngcc0.ɵɵtext(8, "Email");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "tbody");
        ɵngcc0.ɵɵtemplate(10, CrudAppMuraliComponent_tr_10_Template, 13, 3, "tr", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(10);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.users);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2 });
__decorate([
    Input()
], CrudAppMuraliComponent.prototype, "users", void 0);

let CrudAppMuraliModule = class CrudAppMuraliModule {
};
CrudAppMuraliModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CrudAppMuraliModule });
CrudAppMuraliModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CrudAppMuraliModule_Factory(t) { return new (t || CrudAppMuraliModule)(); }, imports: [[BrowserModule],
        BrowserModule] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CrudAppMuraliComponent, [{
        type: Component,
        args: [{
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
            }]
    }], null, { users: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CrudAppMuraliModule, { declarations: function () { return [CrudAppMuraliComponent]; }, imports: function () { return [BrowserModule]; }, exports: function () { return [CrudAppMuraliComponent,
        BrowserModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CrudAppMuraliModule, [{
        type: NgModule,
        args: [{
                declarations: [CrudAppMuraliComponent],
                imports: [BrowserModule],
                exports: [CrudAppMuraliComponent, BrowserModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CrudAppMuraliComponent, CrudAppMuraliModule };

//# sourceMappingURL=crud-murali.js.map