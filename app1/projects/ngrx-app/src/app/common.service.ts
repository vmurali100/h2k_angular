import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  getItems(): Observable<any> {
    return this._http.get(
      "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&pretty=true"
    );
  }
}
