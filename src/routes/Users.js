import React ,{ Component } from 'react';
import { connect } from 'dva';
import './Users.css';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
import utils from "../utils/utils";

class Users extends Component{
  render(){
    const location = this.props.location;
    const ifLogin = utils.judgeLS("userInfo");
    return (
    ifLogin ? (
      <MainLayout location={ location }>
            <div className = "normal">
              <UsersComponent />
            </div>
          </MainLayout>
        ) : utils.goHref("/login")
    );
  }
}

// 到这里，我们已经单独完成了 model 和 component，那么他们如何串联起来呢?
//   dva 提供了 connect 方法。如果你熟悉 redux，这个 connect 就是 react-redux 的 connect 。

export default connect()(Users);


