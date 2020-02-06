import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DynamicService {
  url = "http://www.filltext.com/";
  constructor(private _http: HttpClient) {}

  getData(records, fname) {
    if (fname) {
      this._http
        .get(`${this.url}?rows=${records}&fname={firstName}&pretty=true`)
        .subscribe(res => {
          console.log(res);
        });
    } else {
      this._http
        .get(`${this.url}?rows=${records}&pretty=true`)
        .subscribe(res => {
          console.log(res);
        });
    }
  }
}
