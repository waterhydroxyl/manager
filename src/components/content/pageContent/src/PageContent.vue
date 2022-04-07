<template>
  <div class="page-content">
    <chh-table
      :listData="listData.pageList"
      :listCount="listData.pageCount"
      :pageInfo="pageInfo"
      v-bind="contentConfig"
      @onSizeChange="onSizeChange"
      @onCurrentChange="onCurrentChange"
    >
      <!-- 固定插槽 -->
      <template #headerHandler>
        <el-button v-if="contentConfig.createText" size="mini" type="primary" @click="onCreate">{{
          contentConfig.createText
        }}</el-button>
      </template>
      <template #oldPrice="scope">
        <div size="mini" type="primary">
          {{ '¥' + scope.row.oldPrice }}
        </div>
      </template>
      <template #newPrice="scope">
        <div>
          {{ '¥' + scope.row.newPrice }}
        </div>
      </template>
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.avatar_url"
          :preview-src-list="[scope.row.avatar_url]"
        ></el-image>
      </template>
      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable || scope.row.status === 1 ? 'success' : 'danger'"
          >{{ scope.row.enable || scope.row.status === 1 ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #ban="scope">
        <span>
          {{ scope.row.ban }}
        </span>
      </template>
      <template #createAt="scope">
        <strong>{{ scope.row.createAt | format }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ scope.row.updateAt | format }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="normal" type="text" @click="onEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-warning"
            size="normal"
            type="text"
            class="warning-btn"
            @click="onDelete(scope.row)"
            >封禁</el-button
          >
        </div>
      </template>
    </chh-table>
  </div>
</template>

<script>
/* 组件 */
import ChhTable from '@/components/common/table';
export default {
  components: {
    ChhTable,
  },
  props: {
    contentConfig: {
      type: Object,
      reuqired: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pageInfo: { currentPage: 0, pageSize: 10 },
    };
  },
  computed: {
    listData() {
      return this.$store.getters[`system/myUsersListData`];
    },
  },
  created() {
    this.getListData();
  },
  methods: {
    /* 新建/编辑列表项 */
    onCreate() {
      this.$emit('onCreate');
    },
    onEdit(value) {
      console.log('onEdit');
      console.log(value);
      this.$emit('onEdit', value);
    },

    onSizeChange(pageInfo) {
      this.pageInfo = pageInfo;
      this.getListData();
    },
    onCurrentChange(pageInfo) {
      this.pageInfo = pageInfo;
      this.getListData();
    },
    /* 获取页面数据 */
    async getListData(queryInfo = {}) {
      console.log(queryInfo);
      this.$store.dispatch('system/getUsersList', { ...queryInfo });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  margin-top: 0;
  border-radius: 10px;
  overflow: hidden;
}
.warning-btn {
  color: red;
}
</style>
