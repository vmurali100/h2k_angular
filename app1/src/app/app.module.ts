import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { Sample1Component } from "./sample1/sample1.component";
import { Sample2Component } from "./sample2/sample2.component";
import { ParentComponent } from "./childToParent/parent/parent.component";
import { ChildComponent } from "./childToParent/child/child.component";
import { Sib1Component } from "./Siblings/sib1/sib1.component";
import { Sib2Component } from "./Siblings/sib2/sib2.component";
import { UserComponent } from "./user/user.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
    ParentComponent,
    ChildComponent,
    Sib1Component,
    Sib2Component,
    UserComponent,
    NewUserComponent,
    UserFormComponent,
    ReactiveFormsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
