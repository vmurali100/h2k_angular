import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  receiveAndSend = new Subject();
  constructor() {}

  sendInfoToSib2(info) {
    this.receiveAndSend.next(info);
  }
}
