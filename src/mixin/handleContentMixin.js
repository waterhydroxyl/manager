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
