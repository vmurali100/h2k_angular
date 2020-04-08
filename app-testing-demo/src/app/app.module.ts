import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CrudAppMuraliModule } from "crud-murali/dist";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CrudAppMuraliModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
