<template>
  <div>
    <el-card class="box-card" shadow="hover" style="width: 300px">
      <!-- <div class="imageContainer" @click=""> -->
      <el-image
        style="width: 200px; height: 200px"
        :src="isCheckIn ? imageUrlFalse : imageUrlTrue"
        fit="cover"
        @click="handleView"
      ></el-image>
      <!-- </div> -->
    </el-card>
    <el-card class="box-card" shadow="hover" style="width: 557px; height: 610px">
      <el-calendar>
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template v-slot:dateCell="{ data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }}
          </p>
          <!-- <p>{{ typeof(data.day) }}</p> -->
          <p v-if="calendarInfo[data.day]">{{ calendarInfo[data.day] }}</p>
          <p v-else>未打卡</p>
        </template>
      </el-calendar>
    </el-card>

    <el-card class="box-card" shadow="hover" style="width: 557px; height: 610px">
      <span>详情</span>
    </el-card>
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="formData"
      :handleType="handleType"
      @onConfirm="handleConfirm"
    />
  </div>
</template>

<script>
/* 组件 */
// import PageCard from '@/components/content/pageCard';
import PageModal from '@/components/content/pageModal';
/* 配置 */
import { myRequest } from '@/service';
import { mapDataToOptions } from './utils';
import { handleContentMixin } from '@/mixin/handleContentMixin';
import { modalConfig } from './config/modal';
export default {
  name: 'workCheckIn',
  data() {
    return {
      isCheckIn: false,
      imageUrlTrue: 'https://cloud.ilikestudy.cn//Typora25871649930952_.pic.jpg',
      imageUrlFalse: 'https://cloud.ilikestudy.cn//Typora25841649930874_.pic.jpg',
      loginUserId: 1,
      calendarInfo: {},
    };
  },
  created() {
    this.loginUserId = this.$store.state.loginUser.id;
    this.getCheckInStatus();
    this.getAllClock();
    this.getTaskList();
  },
  components: {
    PageModal,
  },
  mixins: [handleContentMixin],
  computed: {
    modalConfig() {
      return modalConfig;
    },
  },
  methods: {
    handleView() {
      this.onView();
    },
    getTaskList() {
      myRequest.get(`/common/getTaskList`).then((res) => {
        modalConfig.formItems[0].options = mapDataToOptions(res.data);
        console.log(modalConfig);
      });
    },
    getCheckInStatus() {
      myRequest.get(`/employee/clockStatus/${this.loginUserId}`).then((res) => {
        this.isCheckIn = res.data;
      });
    },
    getAllClock() {
      myRequest.get(`/employee/getAllClock/${this.loginUserId}`).then((res) => {
        this.calendarInfo = res.data;
      });
    },
    handleConfirm(data) {
      myRequest.post(`/employee/clockIn`, { ...data, userId: this.loginUserId }).then((res) => {
        console.log(res);
        this.getCheckInStatus();
      });
    },
  },
};
// components: { PageCard },
</script>

<style lang="scss" scoped>
.el-card {
  display: inline-block;
  overflow: scroll;
}
</style>
