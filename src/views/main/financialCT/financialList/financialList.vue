<template>
  <div>
    <page-content
      :contentConfig="contentConfig"
      :dataList="dataList"
      :isShowDelete="true"
      ref="pageContentRef"
      @delect="handleDelect"
      @onCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
/* 组件 */
import PageContent from '@/components/content/pageContent';
/* 配置 */
import { myRequest } from '@/service';
import { contentConfig } from './config/content';
/* mixin */
// import { handleContentMixin } from "@/mixin/handleContentMixin";
export default {
  name: 'financiallist',
  data() {
    return {
      dataList: [],
      formData: {},
      page: 1,
    };
  },
  components: { PageContent },
  created() {
    this.getfinancialList();
  },
  mounted() {},
  computed: {
    contentConfig() {
      return contentConfig;
    },
  },
  methods: {
    getfinancialList() {
      myRequest.get(`/financial/getFinancialList/${this.page}/6`).then((res) => {
        this.dataList = res.data.list;
      });
    },
    handleCurrentChange(val) {
      console.log(val);
      this.page = val;
      this.getfinancialList();
    },
    handleDelect(id) {
      console.log(id);
    },
    handleConfirm() {
      console.log('handleConfirm');
    },
  },
};
</script>

<style scoped lang="less">
</style>

