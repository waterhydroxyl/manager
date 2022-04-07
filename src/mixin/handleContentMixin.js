const HANDLE_CREATE = 'create'; // 新增操作
const HANDLE_EDIT = 'edit'; // 编辑操作

var modalConfig = null;
export const handleContentMixin = {
  data() {
    return {
      formData: {},
      defaultInfo: {},
      handleType: '',
    };
  },
  computed: {
    modalConfig() {
      return modalConfig;
    },
  },
  methods: {
    /* 点击重置 */
    // onReset() {
    //   this.$refs.pageContentRef.getListData();
    // },
    // /* 点击搜索 */
    // onSearch(formData) {
    //   this.$refs.pageContentRef.getListData(formData);
    // },
    // /* 创建用户 */
    onCreate() {
      this.formData = {};
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_CREATE;
    },
    /* 编辑用户 */
    onView() {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      // this.defaultInfo = formData;
    },
  },
};
