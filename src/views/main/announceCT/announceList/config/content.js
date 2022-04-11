export const contentConfig = {
  title: '公告列表',
  module: 'Bulletin',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: "公告类型", label: "公告类型", minWidth: "100" },
    { prop: '负责人', label: '负责人', minWidth: '100', slotName: 'status' },

    { label: '操作', minWidth: '120', slotName: 'handler' },
  ],
  showIndexColumn: true,
  showSelectColumn: false,
};
