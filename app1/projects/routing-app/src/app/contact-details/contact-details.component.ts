import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactsService } from "../contacts.service";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"]
})
export class ContactDetailsComponent implements OnInit {
  selectdContact: any;
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    let allContacts = this.contactsService.getContacts();
    this.route.paramMap.subscribe(res => {
      let userName = res["params"].username;
      this.selectdContact = allContacts.find(contact => {
        return userName == contact.username;
      });
    });
  }
}
