import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CrudAppMuraliModule } from "crud-murali/dist";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CrudAppMuraliModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
