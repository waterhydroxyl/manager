export const modalConfig = {
  title: '客户',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入用户名',
    },
    {
      field: 'telephoneNumber',
      type: 'input',
      label: '电话',
      placeholder: '请输入手机号码',
    },
    {
      field: 'type',
      type: 'input',
      label: '公司类型',
      placeholder: '请输入公司类型',
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址',
    },

    {
      field: 'superintendent',
      type: 'input',
      label: '负责人',
      placeholder: '请输入价格',
      options: [
        { title: '管理员', value: 0 },
        { title: '用户', value: 1 },
      ],
    },

    {
      field: 'createBy',
      type: 'input',
      label: '创建人',
      placeholder: '请输入身份证号码',
      disabled: true,
    },
    {
      field: 'remark',
      type: 'input',
      label: '备注',
      placeholder: '请输入备注',
      textarea: 'textarea',
    },
    {
      field: 'img',
      type: 'none',
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
};
