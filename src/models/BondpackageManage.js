import bondpackageManageService from '../services/BondpackageManage';
import constants from "../constants"
import request from "../utils/request";
import utils from "../utils/utils";

export default {
  namespace: 'bondpackageManage',
  state: {
    list: [],
    totalPage: null,
    curPage: null,
    pageSize: null
  },
  reducers: {
    save(state, { payload: { list, totalPage, curPage ,pageSize} }) {
      return { ...state, list, totalPage, curPage ,pageSize};
    }
  },
  effects: {
    *getList({ payload: { pg = 1 ,pg_size = constants.PAGE_SIZE } }, { call, put }) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log("userInfo-------->",userInfo);
      const userId = userInfo.user.id;
      const token = userInfo.token;
      const params = {
        type:0,
        url:bondpackageManageService.getList,
        queryParams:{
          userId,
          token,
          pageSize:pg_size,
          pageNo:pg
        }
      };
      let { data } = yield call(()=> request(params));
      data = data.data;
      const { debtPackagePageEntity } = data;
      console.log("bondpackageManageData------->",data);
      yield put({
        type: 'save',
        payload: {
          list:debtPackagePageEntity.results,
          totalPage: debtPackagePageEntity.count,
          curPage: debtPackagePageEntity.currentPage,
          pageSize:debtPackagePageEntity.pageSize
        }
      });

    },
     /**remove({ payload: id }, { call, put }) {
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
    },*/
     //重新加载
     *reload(action, { put, select }) {
      const [curPage,pageSize] = yield select(state => [state.users.curPage,state.users.pageSize]);
      const query = {
        pg:curPage,
        pg_size:pageSize
      };

      yield put({ type: 'fetch', payload: query });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {

        switch (pathname){
          case  "/bondpackageManage":
            dispatch({ type: 'getList', payload: query });
            break;
        }

      });
    }
  }
};
