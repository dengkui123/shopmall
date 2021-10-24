import request from 'common/request.js'
// 请求详情商品数据
export function getDetailMsg(params) {
  return request({
    url: 'detail',
    method: 'get',
    params
  })
}

// 获取推荐商品列表
export function getRecommend() {
  return request({
    url: '/recommend',
    method: 'get'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.realPrice = itemInfo.lowNowPrice;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.image = info.images?.[0];
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
