import { env, store } from "@/utils";

class GHttp {
  private config: UniApp.RequestOptions;
  private baseUrl = env.VITE_API_URL;
  constructor(params: UniApp.RequestOptions) {
    this.config = { ...params };
    this.baseUrl += params.url;
  }

  public async request<T>(params: UniApp.RequestOptions) {
    this.config = { ...params };
    this.config.url = this.baseUrl + params.url;
    if (this.config?.method ?? "post" == "post") {
      this.config.header = {
        ...params.header,
        cookie: await store.get("cookie"),
        "Content-Type": "application/json",
      };
    }
    return new Promise<T>((resolve, reject) => {
      uni.request({
        ...this.config,
        timeout: 5000,

        success(response) {
          const res = response;
          // 根据返回的状态码做出对应的操作
          //获取成功
          // console.log(res.statusCode);
          if (res.statusCode == 200) {
            return resolve(res.data as T);
          } else {
            uni.clearStorageSync();
            switch (res.statusCode) {
              case 401:
                uni.showModal({
                  title: "提示",
                  content: "请登录",
                  showCancel: false,
                  success() {
                    setTimeout(() => {
                      uni.navigateTo({
                        url: "/pages/login/index",
                      });
                    }, 1000);
                  },
                });
                break;
              case 404:
                uni.showToast({
                  title: "请求地址不存在...",
                  duration: 2000,
                });
                break;
              default:
                uni.showToast({
                  title: "请重试...",
                  duration: 2000,
                });
                break;
            }
          }
        },
        fail(err) {
          console.log(err);
          if (err.errMsg.indexOf("request:fail") !== -1) {
            uni.showToast({
              title: "网络异常",
              icon: "error",
              duration: 2000,
            });
          } else {
            uni.showToast({
              title: "未知异常",
              duration: 2000,
            });
          }
          reject(err);
        },
        complete() {
          // 不管成功还是失败都会执行
          uni.hideLoading();
          uni.hideToast();
        },
      });
    });
  }
}

export default GHttp;
