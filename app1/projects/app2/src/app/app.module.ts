import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { Sibling1Component } from "./SiblingComponents/sibling1/sibling1.component";
import { Sibling2Component } from "./SiblingComponents/sibling2/sibling2.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { EmployeeComponent } from "./employee/employee.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomPipe } from "./custom.pipe";
import { NewUserComponent } from "./new-user/new-user.component";
import { MobilePipe } from "./mobile.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    UserFormComponent,
    EmployeeComponent,
    NewUserComponent,
    CustomPipe,
    MobilePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomPipe, MobilePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
