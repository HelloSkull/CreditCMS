import React ,{ Component } from 'react';
import { connect } from 'dva';
import './Users.css';
import BondpackageManageComponent from '../components/BondpackageManage/BondpackageManage';
import MainLayout from '../components/MainLayout/MainLayout';

class BondpackageManage extends Component{
  render(){
    const location = this.props.location;
    return (
      <MainLayout location={ location }>
        <div className = "normal">
          <BondpackageManageComponent />
        </div>
      </MainLayout>
    );
  }
}

export default connect()(BondpackageManage);


