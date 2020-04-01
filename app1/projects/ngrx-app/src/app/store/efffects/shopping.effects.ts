import { Injectable } from "@angular/core";
import { switchMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
  ShoppingActionTypes,
  LoadItemsAction,
  LoadItemsSuccess
} from "../actions/shopping.actions";
import { CommonService } from "../../common.service";
@Injectable()
export class ShoppingItemsEffects {
  constructor(private actions$: Actions, private itemService: CommonService) {}

  @Effect()
  loadItems = this.actions$.pipe(ofType(ShoppingActionTypes.LOAD_ITEMS)).pipe(
    switchMap(() => {
      return this.itemService
        .getItems()
        .pipe(map(items => new LoadItemsSuccess(items)));
    })
  );

  @Effect()
  deleteItem = this.actions$.pipe(ofType(ShoppingActionTypes.DELETE_ITEM)).pipe(
    switchMap(data => {
      return this.itemService
        .deleteItem(data["payLoad"])
        .pipe(map(items => new LoadItemsAction()));
    })
  );

  @Effect()
  addItem = this.actions$
    .pipe(ofType(ShoppingActionTypes.ADD_ITEM))
    .pipe(
      switchMap(data =>
        this.itemService
          .addItem(data["payLoad"])
          .pipe(map(items => new LoadItemsAction()))
      )
    );
  @Effect()
  updateItem = this.actions$
    .pipe(ofType(ShoppingActionTypes.UPDATE_ITEM))
    .pipe(
      switchMap(data =>
        this.itemService
          .updateItem(data["payLoad"])
          .pipe(map(data => new LoadItemsAction()))
      )
    );
}
