export const modalConfig = {
  title: '任务',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '任务名称',
      placeholder: '请输入任务名称',
    },
    {
      field: 'customerName',
      type: 'select',
      label: '客户名称',
    },
    {
      field: 'equipmentName',
      type: 'select',
      label: '出勤设备',
    },
    {
      field: 'address',
      type: 'input',
      label: '任务地址',
      placeholder: '请输入任务地址',
    },
    {
      field: 'type',
      type: 'input',
      label: '任务类型',
    },
    {
      field: 'status',
      type: 'select',
      label: '任务状态',
      placeholder: '请选择任务状态',
      options: [
        {
          title: '未开始',
          value: 2,
        },
        {
          title: '进行中',
          value: 1,
        },
        {
          title: '已完成',
          value: 3,
        },
      ],
    },
    {
      field: 'scheduledStartTime',
      type: 'datepicker',
      label: '预计开始时间',
    },
    {
      field: 'actualStartTime',
      type: 'datepicker',
      label: '实际开始时间',
    },
    {
      field: 'img',
      type: 'none',
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
};
