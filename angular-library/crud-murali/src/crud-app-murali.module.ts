import { NgModule } from "@angular/core";
import { CrudAppMuraliComponent } from "./crud-app-murali.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [CrudAppMuraliComponent],
  imports: [BrowserModule],

  exports: [CrudAppMuraliComponent, BrowserModule],
})
export class CrudAppMuraliModule {}
