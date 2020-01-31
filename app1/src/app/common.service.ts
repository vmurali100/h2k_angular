import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  exchangeMessage = new Subject();
  constructor() {}

  sendInfoToSib2(message) {
    this.exchangeMessage.next(message);
    console.log(message);
  }
}
