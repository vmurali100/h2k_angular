import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DivyaComponent } from "./divya.component";
import { MuraliComponent } from "./murali.component";

@NgModule({
  declarations: [DivyaComponent, MuraliComponent],
  imports: [BrowserModule],
  bootstrap: [DivyaComponent],
  providers: []
})
export class DivyaModule {}
