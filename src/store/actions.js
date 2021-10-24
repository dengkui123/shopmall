import { ADD_COUNTER, ADD_TO_CART } from './mutation-types.js'
export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      // 判断是否存在该商品，存在加一，不存在添加到购物车
      const oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid);
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve('购物车商品数量+1');
      } else {
        payLoad.count = 1;
        context.commit(ADD_TO_CART, payLoad);
        resolve('添加到购物车成功！');
      }
    })
  }

  // addCartAsync({ context }, payLoad) {
  //   context.commit('addCart',payLoad);
  // }
}
