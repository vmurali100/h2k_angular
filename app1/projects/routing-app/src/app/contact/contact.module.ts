import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ContactDetailsComponent } from "../contact-details/contact-details.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ContactComponent, ContactDetailsComponent],
  imports: [CommonModule, ContactRoutingModule]
})
export class ContactModule {}
