import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  getItems(): Observable<any> {
    return this._http.get("http://localhost:3000/items");
  }
  deleteItem(item) {
    return this._http.delete("http://localhost:3000/items/" + item.id);
  }
  addItem(item) {
    return this._http.post("http://localhost:3000/items/", item);
  }
  updateItem(item) {
    return this._http.put("http://localhost:3000/items/" + item.id, item);
  }
}
