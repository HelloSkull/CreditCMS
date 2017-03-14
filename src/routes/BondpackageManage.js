import React ,{ Component } from 'react';
import { connect } from 'dva';
import './BondpackageManage.css';
import BondpackageManageComponent from '../components/BondpackageManage/BondpackageManage';
import MainLayout from '../components/MainLayout/MainLayout';
import utils from "../utils/utils";

class BondpackageManage extends Component{
  render(){
      const location = this.props.location;
      const ifLogin = utils.judgeLS("userInfo");
      return (
        ifLogin ? (
          <MainLayout location={ location }>
            <div className = "normal">
              <BondpackageManageComponent />
            </div>
          </MainLayout>
        ) : utils.goHref("/login")
      );
  }
}

export default connect()(BondpackageManage);


