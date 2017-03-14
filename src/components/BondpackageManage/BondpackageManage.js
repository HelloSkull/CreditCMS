import React,{ Component } from "react";
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button,Icon,Select,Collapse} from 'antd';

import CollectionsPage from "../Common/CollectionsPage";
import RowSelection from "../Common/RowSelection";
import PaginationPage from "../Common/PaginationPage";
import SelectPage from "../Common/SelectPage";

import TableParameters from "./TableParameters";
const Panel = Collapse.Panel;
import "../Common/Common.less";

class BondpackageManage extends Component{
  state = {
    selectedRowKeys: [],
    curCheckedList:TableParameters.defaultCheckedList,
    totalCheckedList:TableParameters.totalCheckedList,
    plainOptions:TableParameters.plainOptions
  };

  //展示显示的行数
  showColumns =(checkList)=>{
    this.setState({curCheckedList:checkList});
  };


  //编辑
  editHandler(id,values) {
    const { dispatch } = this.props;
    dispatch({
      type: 'users/patch',
      payload: { id, values }
    });
  }

  //删除
  deleteHandler(id){
    const { dispatch } = this.props;
    dispatch({
      type: 'users/remove',
      payload: id
    });
  }

  //创建
  createHandler(values) {
    const { dispatch } = this.props;
    dispatch({
      type: 'users/create',
      payload: values
    });
  }

  render(){
    let { list : dataSource,loading,totalPage,curPage,pageSize} = this.props;
    totalPage = parseInt(totalPage);
    curPage = parseInt(curPage);
    pageSize = parseInt(pageSize);
    const { selectedRowKeys } = this.state;
    const { totalColumns } = TableParameters;
    let displayColumns = [];
    const curCheckedList = this.state.curCheckedList;

    curCheckedList.forEach((e,i) =>{
      displayColumns.push(totalColumns[e]);
    });

    const rowSelection = RowSelection;

    return (
      <div className="">

        <h2 className="mode-name">债券包管理</h2>
        <Collapse bordered={false} style={{ marginBottom: 20  }} defaultActiveKey={['1']}>
          <Panel header="选择要显示或下载的表单项" key="1">
            <CollectionsPage
              plainOptions = { this.state.plainOptions }
              defaultCheckedList = { this.state.curCheckedList }
              totalCheckedList = { this.state.totalCheckedList }
              showColumns = {this.showColumns}/>
          </Panel>
        </Collapse>

        <SelectPage
          pageSize = { pageSize }
          pathName={"/bondpackageManage"}/>

          <Table columns={ displayColumns }
                 rowSelection={ rowSelection }
                 dataSource={ dataSource }
                 loading={ loading }
                 rowKey = { item => item.id}
                 pagination={false}/>

          <PaginationPage
            totalPage={totalPage}
            curPage={curPage}
            pageSize={pageSize}
            pathName={"/bondpackageManage"}/>

      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  const { list, totalPage, curPage,pageSize } = state.bondpackageManage;
  return {
    loading: state.loading.models.bondpackageManage,
    list,
    totalPage,
    curPage,
    pageSize
  };
};

export default connect(mapStateToProps)(BondpackageManage);
