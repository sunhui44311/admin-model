import Vue from 'vue';

let Url = {
  // serverUrl: 'http://192.168.0.122:81/admin',//吴杰的本地
  // serverUrl: 'http://kido.house-api.yihuo-cloud.com/admin',//李子龙的本地
  // serverUrl: 'http://127.0.0.1:12190/admin',//李传浩的本地
  serverUrl: 'https://api.house.yihuo-cloud.com/admin',//生产环境
  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


