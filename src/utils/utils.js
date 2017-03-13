const utils = {
  //判断localStorage
    judgeLS:(key)=>{
      return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    },
  //登陆失效
  invalidLogin:()=>{
    alert("登录失效,即将返回登陆页面");
    this.goHref("/login");
  },
  //跳转页面
   goHref:(page)=>{
     window.location.href = page;
   }
};


export default utils;
