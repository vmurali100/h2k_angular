import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

var SuperLibComponent = /** @class */ (function () {
    function SuperLibComponent() {
    }
    SuperLibComponent = __decorate([
        Component({
            selector: "super-lib-component",
            template: "<h1>Hello from Super Library Component</h1>"
        })
    ], SuperLibComponent);
    return SuperLibComponent;
}());

var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = __decorate([
        NgModule({
            declarations: [SuperLibComponent],
            exports: [SuperLibComponent]
        })
    ], SuperLibModule);
    return SuperLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
