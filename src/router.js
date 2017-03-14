import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

//按需加载
function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/BondpackageManage'));
          cb(null, require('./routes/BondpackageManage'));
        });
      }
    },
    {
      path: '/login',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/Users'));
          cb(null, require('./routes/Login'));
        });
      }
    },
    {
      path: '/bondpackageManage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/BondpackageManage'));
          cb(null, require('./routes/BondpackageManage'));
        });
      }
    }/*,
    {
      path: '/users',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/Users'));
          cb(null, require('./routes/Users'));
        });
      }
    }*/
  ];


  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
