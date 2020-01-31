import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { Sample1Component } from "./sample1/sample1.component";
import { Sample2Component } from "./sample2/sample2.component";
import { ParentComponent } from "./childToParent/parent/parent.component";
import { ChildComponent } from "./childToParent/child/child.component";
import { Sib1Component } from "./Siblings/sib1/sib1.component";
import { Sib2Component } from "./Siblings/sib2/sib2.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
    ParentComponent,
    ChildComponent,
    Sib1Component,
    Sib2Component,
    UserComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
