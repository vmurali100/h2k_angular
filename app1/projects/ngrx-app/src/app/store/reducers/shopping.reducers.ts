import { ShoppingItem } from "../models/Shopping-item.model";
import { ShoppingActionTypes } from "../actions/shopping.actions";

const initialState: Array<ShoppingItem> = [
  {
    id: "ABC",
    name: "Nokia"
  },
  {
    id: "ABCD",
    name: "Motorola"
  }
];

export function ShoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payLoad];

    default:
      return state;
  }
}
