import React,{ Component } from "react";
import { connect } from 'dva';
import { Pagination } from 'antd';
import { routerRedux } from 'dva/router';

class PaginationPage extends Component{
  //分页
  pageChangeHandler(page) {
    const { dispatch } = this.props;
    const pageSize = this.props.pageSize;
    dispatch(routerRedux.push({
      pathname: this.props.pathName,
      query: {
        "pg": page,
        "pg_size":pageSize
      }
    }));
  }
  render(){
    const totalPage = this.props.totalPage;
    const curPage = this.props.curPage;
    const pageSize = this.props.pageSize;
    return (
      <Pagination className="ant-table-pagination"
                  total={totalPage}
                  current={curPage}
                  pageSize={pageSize}
                  onChange={ this.pageChangeHandler.bind(this) }/>
    )
  }
}

export default connect()(PaginationPage)
