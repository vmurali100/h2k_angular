import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component:  },
  { path: "about", component: AboutComponent },
  { path: "contact", loadChildren: "./contact/contact.module#ContactModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
