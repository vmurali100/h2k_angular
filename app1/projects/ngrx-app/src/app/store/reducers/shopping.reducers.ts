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
      let Newstate = [];

      state.map(obj => {
        let newObj = Object.assign({}, obj);

        if (action.payLoad.id == obj.id) {
          newObj.itemName = action.payLoad.itemName;
        }
        Newstate.push(newObj);
      });

      return Newstate;
    default:
      return state;
  }
}
