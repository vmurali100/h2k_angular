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
  allContacts: any = [];
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.allContacts = this.contactsService.getData();
    this.route.paramMap.subscribe(res => {
      let userName = res["params"].username;
      this.selectdContact = this.allContacts.find(contact => {
        return userName == contact.username;
      });
    });
  }
}
