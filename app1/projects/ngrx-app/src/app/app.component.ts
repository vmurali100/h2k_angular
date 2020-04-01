import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/models/app-state.model";
import { Observable } from "rxjs";
import { ShoppingItem } from "./store/models/Shopping-item.model";
import {
  AddItemAction,
  DeleteItemAction,
  UpdateItemAction,
  LoadItemsAction
} from "./store/actions/shopping.actions";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // item = {
  //   id: "",
  //   name: ""
  // };
  shoppingItems$: Observable<Array<ShoppingItem>>;
  constructor(private store: Store<AppState>) {}
  title = "ngrx-app";
  ngOnInit() {
    this.shoppingItems$ = this.store.select(abc => {
      return abc.shopping;
    });
    this.store.dispatch(new LoadItemsAction());
    // this.store.subscribe(res => {
    //   this.shoppingItems = res["shopping"];
    // });
  }

  addItem(itemForm: NgForm) {
    this.store.dispatch(new AddItemAction(itemForm.value));
    itemForm.reset();
    // console.log(itemForm.value);
  }

  deleteItem(item) {
    this.store.dispatch(new DeleteItemAction(item));
  }

  editItem(itemForm, item) {
    console.log(itemForm);
    itemForm.setValue(item);
    // itemForm.setValue(item);
  }
  updateItem(itemForm: NgForm) {
    this.store.dispatch(new UpdateItemAction(itemForm.value));
    itemForm.reset();
  }
}
