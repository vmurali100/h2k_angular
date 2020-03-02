import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ContactDetailsComponent } from "../contact-details/contact-details.component";

const contactRoutes: Routes = [
  {
    path: "",
    component: ContactComponent
  },
  {
    path: "contact-details/:username",
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
