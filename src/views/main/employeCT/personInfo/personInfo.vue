<template>
  <div>
    <div class="main">
      <el-upload
        class="avatar-uploader"
        action="/api/common/uploadPicture"
        name="file"
        :auto-upload="true"
        :show-file-list="false"
      >
        <img :src="userInfo.img" class="avatar" />
      </el-upload>
      <chh-form v-bind="modalConfig" :formData="userInfo"> </chh-form>
      <el-button type="primary" @click="handleConfirm">提交更改</el-button>
    </div>
  </div>
</template>

<script>
/* 组件 */
import ChhForm from '@/components/common/form';
// import PageCard from '@/components/content/pageCard';
// import PageModal from '@/components/content/pageModal';

import { modalConfig } from './config/modal';
export default {
  name: 'personInfo',
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.userInfo = this.$store.state.loginUser;
  },
  components: {
    ChhForm,
    // PageCard,
    // PageModal,
  },
  computed: {
    modalConfig() {
      return modalConfig;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-left: 50px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  left: 500px; */
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
  /* top: 100px;
  position: absolute; */
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center !important;
}
.chh-form {
  position: relative;
  margin-left: -270px;
}
</style>
