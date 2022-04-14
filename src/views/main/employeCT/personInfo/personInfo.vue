<template>
  <div>
    <PageCard
      :name="userInfo.name"
      :imageUrl="userInfo.img"
      :id="userInfo.id"
      :workNumber="userInfo.workNumber"
      :telephoneNumber="userInfo.telephoneNumber"
      :sex="userInfo.sex"
      :workType="userInfo.workType"
      :idCardNumber="userInfo.idCardNumber"
      
    />

    <!-- <PageModal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfig"
      :defaultInfo="formData"
      :handleType="handleType"
      @onConfirm="handleConfirm"
    /> -->
  </div>
</template>

<script>
/* 组件 */
import PageCard from '@/components/content/pageCard';
// import PageModal from '@/components/content/pageModal';
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
    PageCard,
    // PageModal,
  },
};
</script>

<style lang="scss" scoped>
</style>
