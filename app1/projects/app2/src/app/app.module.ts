import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { Sibling1Component } from "./SiblingComponents/sibling1/sibling1.component";
import { Sibling2Component } from "./SiblingComponents/sibling2/sibling2.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
