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
}
