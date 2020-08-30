import request from "@/utils/request";
export default {
  //1、创建订单
  createOrder(courseId) {
    return request({
      url: `/order/order/createOrder/${courseId}`,
      method: "post"
    });
  },
  //2、根据id获取订单
  getById(orderId) {
    return request({
      url: `/order/order/getOrder/${orderId}`,
      method: "get"
    });
  },
  //3、生成微信支付二维码
  createNative(orderNo) {
    return request({
      url: `/order/paylog/createNative/${orderNo}`,
      method: "get"
    });
  },
  //4、根据id获取订单支付状态
  queryPayStatus(orderNo) {
    return request({
      url: `/order/paylog/queryPayStatus/${orderNo}`,
      method: "get"
    });
  }
};
