export const modalConfig = {
  title: '设备',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '设备名称',
      placeholder: '请输入用户名',
    },
    {
      field: 'type',
      type: 'input',
      label: '类型',
      placeholder: '请输入型号',
    },
    {
      field: 'model',
      type: 'input',
      label: '型号',
      placeholder: '请输入真实姓名',
    },
    {
      field: 'price',
      type: 'input',
      label: '购买价格',
      placeholder: '请输入价格',
      isHidden: false,
    },
    {
      field: 'workTime',
      type: 'input',
      label: '工作时长',
      placeholder: '请输入电话号码',
      disabled: true,
    },
    {
      field: 'totalRevenue',
      type: 'input',
      label: '累计收入',
      placeholder: '请选择部门',
      disabled: true,
    },
    {
      field: 'responsible',
      type: 'input',
      label: '责任人',
    },
    {
      field: 'img',
      type: 'none',
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
};
