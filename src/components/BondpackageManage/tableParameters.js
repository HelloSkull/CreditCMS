const TableParameters = {
  totalColumns:{
    id: {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    code: {
      title: '编码',
      dataIndex: 'code',
      key: 'code'
    },
    creditorId: {
      title: '资方Id',
      dataIndex: 'creditorId',
      key: 'creditorId'
    },
    creditorName: {
      title: '资方名称',
      dataIndex: 'creditorName',
      key: 'creditorName'
    },
    createdAt: {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    userGrade: {
      title: '用户积分要求',
      dataIndex: 'userGrade',
      key: 'userGrade'
    },
    idCardAuth: {
      title: '证件验证',
      dataIndex: 'idCardAuth',
      key: 'idCardAuth'
    },
    totalAmount: {
      title: '总金额',
      dataIndex: 'totalAmount',
      key: 'totalAmount'
    },
    status: {
      title: '状态',
      dataIndex: 'status',
      key: 'status'
    },
    relativeId: {
      title: '债权id',
      dataIndex: 'relativeId',
      key: 'relativeId'
    },
    relativeType: {
      title: '债权类型',
      dataIndex: 'relativeType',
      key: 'relativeType'
    },
    lendInterval: {
      title: '借款周期',
      dataIndex: 'lendInterval',
      key: 'lendInterval'
    },
    operation1: {
      title: '操作',
      key: 'operation1',
      className: "text-center"
    }
  },
  totalCheckedList:[
    'code',
    'id',
    'creditorId',
    'creditorName',
    'createdAt',
    "userGrade",
    'status',
    'relativeId',
    'totalAmount',
    'lendInterval',
    'idCardAuth',
    'relativeType'],
  defaultCheckedList:
    ['code',
    'id',
    'creditorId',
    'creditorName',
    'createdAt',
    "userGrade",
    'status',
    'relativeId',
    'totalAmount',
    'lendInterval'],
    plainOptions:
      [{ label: 'id', value: 'id' },
    { label: '编码', value: 'code' },
    { label: '资方Id', value: 'creditorId' },
    { label: '资方名称', value: 'creditorName' },
    { label: '创建时间', value: 'createdAt' },
    { label: '用户积分要求', value: 'userGrade' },
    { label: '证件验证', value: 'idCardAuth' },
    { label: '总金额', value: 'totalAmount' },
    { label: '状态', value: 'status' },
    { label: '债权id', value: 'relativeId' },
    { label: '债权类型', value: 'relativeType' },
    { label: '借款周期', value: 'lendInterval' }
    ]
};

export default TableParameters;
