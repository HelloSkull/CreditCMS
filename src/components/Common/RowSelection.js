const rowSelection  = {
    onChange: (selectedRowKeys, selectedRows) => {
      rowSelection.selectedItemIds = selectedRowKeys;
      console.log("selectedItemIds---------->",selectedRowKeys);
    },
    onSelect: (record, selected, selectedRows) => {
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
    },
    selectedItemIds:[]
  };

export default rowSelection;
