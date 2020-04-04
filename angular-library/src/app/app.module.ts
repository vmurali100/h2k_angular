import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SuperLibModule } from "super-lib";
import { AngularRatingModule } from "angular-rating";
import { CrudAppMuraliModule } from "crud-murali";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SuperLibModule,
    AngularRatingModule,
    CrudAppMuraliModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
