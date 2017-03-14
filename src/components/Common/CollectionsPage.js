import { Checkbox } from 'antd';
import React,{ Component } from "react";
const CheckboxGroup = Checkbox.Group;

class CollectionsPage extends React.Component {
  state = {
    checkedList: this.props.defaultCheckedList,
    indeterminate: true,
    checkAll: false
  };

  onChange = (checkedList) => {
    this.props.showColumns(checkedList);
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < this.props.plainOptions.length),
      checkAll: checkedList.length === this.props.plainOptions.length
    });
  };

  onCheckAllChange = (e) => {
    const curCheckedList = e.target.checked ? this.props.totalCheckedList: [];
    this.props.showColumns(curCheckedList);
    this.setState({
      checkedList: curCheckedList,
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}>
            选择所有表单项
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={this.props.plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  }
}

export default CollectionsPage;
