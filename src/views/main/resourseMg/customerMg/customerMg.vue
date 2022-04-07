<template>
  <div class="overview">
    <div class="new">
      <el-button type="primary" icon="el-icon-plus" @click="onCreate">新建</el-button>
    </div>
    <div class="showInfo">
      <template v-for="item in eqList">
        <PageCard
          :name="item.name"
          :model="item.model"
          :createBy="item.createBy"
          :imageUrl="item.img"
          :key="item.id"
          :id="item.id"
          @view="handleView"
          @delect="handleDelect"
        />
      </template>
    </div>
    <div class="footer">
      <PaginationFooter @current-change="handleCurrentChange" :total="50" />
    </div>

    <PageModal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfig"
      :defaultInfo="formData"
      :handleType="handleType"
      @onConfirm="handleConfirm"
    />
  </div>
</template>

<script>
/* 组件 */
import PageCard from '@/components/content/pageCard';
import PaginationFooter from '@/components/content/paginationFooter';
import PageModal from '@/components/content/pageModal';
/* 配置 */
import { myRequest } from '@/service';

/* 配置 */
import { handleContentMixin } from '@/mixin/handleContentMixin';
import { modalConfig } from './config/modal';

export default {
  components: { PageCard, PaginationFooter, PageModal },
  data() {
    return {
      eqList: [],
      page: 1,
    };
  },
  mixins: [handleContentMixin],
  created() {
    this.getcustomerList();
  },
  computed: {
    modalConfig() {
      return modalConfig;
    },
  },
  methods: {
    getcustomerList() {
      myRequest.get(`/customer/getAllCustomer/${this.page}/6`).then((res) => {
        this.eqList = res.data.list;
      });
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.page = val;
      this.getcustomerList();
    },
    handleView(id) {
      myRequest.get(`/customer/getCustomerById/${id}`).then((res) => {
        this.formData = res.data;
        this.onView();
      });
      console.log(id);
    },
    handleConfirm(newFormData, id) {
      if (!id) {
        myRequest.post(`/customer/addCustomer`, newFormData).then((res) => {
          console.log(res);
          this.$message.success('操作成功');
          this.getcustomerList();
        });
      } else {
        myRequest.patch(`/customer/updateCustomer/${id}`, newFormData).then((res) => {
          console.log(res);
          this.$message.success('操作成功');
          this.getcustomerList();
        });
      }
    },
    handleDelect(id) {
      myRequest.delete(`/customer/deletecustomer/${id}`).then((res) => {
        console.log(res);
        this.$message.success('操作成功');
        this.getcustomerList();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.new {
  margin-left: 30px;
}
.footer {
  position: relative;
  margin-left: 950px;
  /* left: 950px; */
}
</style>
