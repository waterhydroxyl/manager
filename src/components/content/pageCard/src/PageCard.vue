<template>
  <div class="card">
    <el-card
      :body-style="{ display: 'flex', 'justify-content': 'space-around', 'align-items': 'center' }"
    >
      <div>
        <div>名称：{{ name }}</div>
        <div v-if="model">型号：{{ model }}</div>
        <div v-if="workNumber">工号：{{ workNumber }}</div>
        <div v-if="createBy">负责人：{{ createBy }}</div>
        <div class="bottom clearfix">
          <el-button type="primary" size="mini" class="button" @click="handleView">查看</el-button>
          <el-button type="danger" size="mini" class="button" @click="handleDelect">删除</el-button>
        </div>
      </div>

      <div class="image">
        <el-image
          v-if="imageUrl"
          style="width: 100px; height: 100px"
          :src="imageUrl"
          :preview-src-list="[imageUrl]"
        >
        </el-image>
      </div>
      <!-- <img :src="imageUrl" class="image" /> -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PageCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    model: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    workNumber: {
      type: String,
      default: '',
    },
    createBy: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleView() {
      // console.log(this.id);
      this.$emit('view', this.id);
    },
    handleDelect() {
      this.$emit('delect', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 360px;
  height: 250px;
  display: inline-block;
  margin: 30px;
  /* &:nth-child(3n) {
    margin-right: 0;
  } */
}
.bottom {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  margin-left: 20px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
