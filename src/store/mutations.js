import { ADD_COUNTER, ADD_TO_CART } from './mutation-types.js'

export default {
  // addCart(state, payLoad) {
  //   const oldProduct = state.cartList.find(item => {
  //     return item.iid === payLoad.iid
  //   })
  //   if (oldProduct) {
  //     oldProduct.count++;
  //   } else {
  //     payLoad.count = 1;
  //     state.cartList.push(payLoad);
  //   }
  // }
  [ADD_COUNTER](state, payLoad) {
    payLoad.count++;
  },
  [ADD_TO_CART](state, payLoad) {
    payLoad.isChecked = true;
    state.cartList.push(payLoad);
  }
}
