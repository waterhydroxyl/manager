<template>
  <div class="page-content">
    <chh-table :dataList="dataList" v-bind="contentConfig" v-on="$listeners">
      <!-- 固定插槽 -->
      <template #headerHandler>
        <el-button v-if="contentConfig.createText" size="mini" type="primary">{{
          contentConfig.createText
        }}</el-button>
      </template>
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.avatar_url"
          :preview-src-list="[scope.row.avatar_url]"
        ></el-image>
      </template>
      <template #createAt="scope">
        <strong>{{ scope.row.createAt | format }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ scope.row.updateAt | format }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="normal" type="text" @click="onView(scope.row.id)"
            >查看</el-button
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
    dataList: {
      type: Array,
      required: true,
    },
    contentConfig: {
      type: Object,
      reuqired: true,
    },
  },
  methods: {
    onView(value) {
      console.log('onView');
      console.log(value);
      this.$emit('onView', value);
    },

    onSizeChange(pageInfo) {
      this.pageInfo = pageInfo;
      this.getdataList();
    },
    onCurrentChange(val) {
      this.page = val;
      this.getdataList();
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
