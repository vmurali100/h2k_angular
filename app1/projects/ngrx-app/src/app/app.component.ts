import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/models/app-state.model";
import { Observable } from "rxjs";
import { ShoppingItem } from "./store/models/Shopping-item.model";
import { AddItemAction } from "./store/actions/shopping.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  constructor(private store: Store<AppState>) {}
  title = "ngrx-app";
  ngOnInit() {
    this.shoppingItems$ = this.store.select(abc => {
      return abc.shopping;
    });
  }

  addItem() {
    this.store.dispatch(new AddItemAction({ id: "CDF", name: "My New Item" }));
  }
}
