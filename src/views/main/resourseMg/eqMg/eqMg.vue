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
    this.getEquipmentList();
  },
  computed: {
    modalConfig() {
      return modalConfig;
    },
  },
  methods: {
    getEquipmentList() {
      myRequest.get(`/equipment/getAllEquipment/${this.page}/6`).then((res) => {
        this.eqList = res.data.list;
      });
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.page = val;
      this.getEquipmentList();
    },
    handleView(id) {
      myRequest.get(`/equipment/getEquipmentById/${id}`).then((res) => {
        this.formData = res.data;
        this.onView();
      });
      console.log(id);
    },
    handleConfirm(newFormData, id) {
      if (!id) {
        myRequest.post(`/equipment/addEquipment`, newFormData).then((res) => {
          console.log(res);
          this.$message.success('操作成功');
          this.getEquipmentList();
        });
      } else {
        myRequest.patch(`/equipment/updateEquipment/${id}`, newFormData).then((res) => {
          console.log(res);
          this.$message.success('操作成功');
          this.getEquipmentList();
        });
      }
    },
    handleDelect(id) {
      myRequest.delete(`/equipment/deleteEquipment/${id}`).then((res) => {
        console.log(res);
        this.$message.success('操作成功');
        this.getEquipmentList();
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
