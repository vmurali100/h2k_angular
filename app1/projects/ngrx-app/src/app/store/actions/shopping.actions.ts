import { Action } from "@ngrx/store";
import { ShoppingItem } from "../models/Shopping-item.model";

export enum ShoppingActionTypes {
  ADD_ITEM = "[SHOPPING] Add Item",
  DELETE_ITEM = "[SHOPPING] Delete Item",
  UPDATE_ITEM = "[SHOPPING] Update Item",
  LOAD_ITEMS = "[SHOPPING] Load Items",
  LOAD_ITEMS_SUCCESS = "[SHOPPING] Load Items Success"
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payLoad: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payLoad: ShoppingItem) {}
}

export class UpdateItemAction implements Action {
  readonly type = ShoppingActionTypes.UPDATE_ITEM;
  constructor(public payLoad: ShoppingItem) {}
}

export class LoadItemsAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEMS;
}

export class LoadItemsSuccess implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEMS_SUCCESS;
  constructor(public payLoad) {}
}
export type ShoppingAction = AddItemAction;
