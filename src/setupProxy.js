// 用来做代理的
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "服务地址:域名",
      changeOrigin: true,
    })
  );
};
