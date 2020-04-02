import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let SuperLibComponent = class SuperLibComponent {
};
SuperLibComponent = __decorate([
    Component({
        selector: "super-lib-component",
        template: "<h1>Hello from Super Library Component</h1>"
    })
], SuperLibComponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        declarations: [SuperLibComponent],
        exports: [SuperLibComponent]
    })
], SuperLibModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
