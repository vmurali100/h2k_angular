import { ShoppingItem } from "./Shopping-item.model";

export interface AppState {
  readonly shopping: Array<ShoppingItem>;
}
