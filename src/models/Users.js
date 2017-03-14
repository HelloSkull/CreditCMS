import usersService from '../services/Users';
import request from "../utils/request";
import utils from "../utils/utils";

export default {
  namespace: 'users',
  state: {
    list: [],
    totalPage: null,
    curPage: null,
    pageSize: null
  },
  reducers: {
    save(state, { payload: { data: list, totalPage, curPage ,pageSize} }) {
      return { ...state, list, totalPage, curPage ,pageSize};
    }
  },
  effects: {
    //登陆
    *login({ params },{call}){
      params.url = usersService.login;
      const { data } = yield call(()=> request(params) );
      localStorage.setItem("userInfo",JSON.stringify(data.data));
      utils.goHref("/bondpackageManage");
    } 
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        switch (pathname){
          // case  "/":
          //   //如果用户没有登陆过
          //   if(!utils.judgeLS("userInfo")){
          //      utils.goHref("/login");
          //   }
          //   break;
          case "/users":
            dispatch({ type: 'fetch', payload: query });
            break;
        }
      });
    }
  }
};
