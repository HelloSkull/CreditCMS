import React,{ Component } from "react";
import { connect } from 'dva';
import { Select } from 'antd';
import { routerRedux } from 'dva/router';

class SelectPage extends Component{
  //切换每页显示的数量
  handleChange(value){
    const { dispatch} = this.props;
    dispatch(routerRedux.push({
      pathname: this.props.pathName,
      query:{
        "pg": 1,
        "pg_size":value
      }
    }));
  }

  render(){
    const pageSize = this.props.pageSize;
    return (
      <div className="table-operations">
        <Select className="mg-r-10" value ={ pageSize.toString() || 10} style={{ width: 60 }} onChange={this.handleChange.bind(this)}>
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="50">50</Option>
          <Option value="100">100</Option>
          <Option value="500">500</Option>
        </Select>
      </div>
    )
  }
}

export default connect()(SelectPage);
