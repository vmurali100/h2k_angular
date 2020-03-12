import { ShoppingItem } from "../models/Shopping-item.model";
import { ShoppingActionTypes } from "../actions/shopping.actions";

const initialState: Array<ShoppingItem> = [
  {
    id: "ABC",
    itemName: "Nokia"
  },
  {
    id: "ABCD",
    itemName: "Motorola"
  }
];

export function ShoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payLoad];

    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter(item => item !== action.payLoad);

    case ShoppingActionTypes.UPDATE_ITEM:
      let Newstate = [...state];
      console.log(Newstate);

      Newstate[0].id = "ABDCE";

    // return Newstate;
    default:
      return state;
  }
}
