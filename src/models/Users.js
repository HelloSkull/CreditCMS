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
    },
    /**fetch({ payload: { pg = 1 ,pg_size = constants.PAGE_SIZE } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch,pg ,pg_size);
      yield put({
        type: 'save',
        payload: {
          data,
          totalPage: parseInt(headers['x-total-count'], 10),
          curPage: parseInt(pg, 10),
          pageSize:parseInt(pg_size)
        }
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
    //编辑
    *patch({ payload: { id, values } }, { call, put }) {
      yield call(usersService.patch, id, values);
      yield put({ type: 'reload' });
    },
    //创建
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      yield put({ type: 'reload' });
    },
    //重新加载
    *reload(action, { put, select }) {
      const [curPage,pageSize] = yield select(state => [state.users.curPage,state.users.pageSize]);
      const query = {
        pg:curPage,
        pg_size:pageSize
      };

      yield put({ type: 'fetch', payload: query });
    }*/
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
