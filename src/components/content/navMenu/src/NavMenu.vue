<template>
  <div class="nav-menu">
    <!-- <div class="logo">
      <img class="img" src="~@/assets/img/login/logo.svg" alt="logo" />
      <span @touchstart="touchstart" @touchend="touchend" v-if="!isCollapse" class="title"
        >Vue2+JS</span
      >
    </div> -->
    <el-menu class="el-menu-vertical" :collapse="isCollapse" :default-active="'11'">
      <el-submenu :index="x.id + ''" v-for="x in menuList" :key="x.id">
        <template slot="title">
          <i :class="x.icon"></i>
          <span>{{ x.name }}</span>
        </template>
        <template v-if="x.children">
          <el-menu-item v-for="y in x.children" :key="y.id" :index="y.id + ''" @click="onMenu(y)">{{
            y.name
          }}</el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import localCache from '@/utils/cache.js';

export default {
  data() {
    return {
      menuList: [],
      // menuActive: '',
      loop: 0,
    };
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  created() {
    // 获取菜单和选中菜单
    const info = [
      {
        id: 1,
        name: '资源管理',
        type: 1,
        url: '/main/resourseMg',
        icon: 'el-icon-monitor',
        sort: 1,
        children: [
          {
            id: 11,
            url: '/main/resourseMg/eqMg',
            name: '设备管理',
            sort: 106,
            type: 2,
            children: null,
            parentId: 1,
          },
          {
            id: 12,
            url: '/main/resourseMg/employeMg',
            name: '员工管理',
            sort: 106,
            type: 2,
            children: null,
            parentId: 1,
          },
          {
            id: 13,
            url: '/main/resourseMg/customerMg',
            name: '客户管理',
            sort: 106,
            type: 2,
            children: null,
            parentId: 1,
          },
        ],
      },
      {
        id: 2,
        name: '公告中心',
        type: 1,
        url: '/main/system',
        icon: 'el-icon-setting',
        sort: 2,
        children: [
          {
            id: 21,
            url: '/main/system/user',
            name: '公告管理',
            sort: 100,
            type: 2,
            parentId: 2,
          },
          {
            id: 22,
            url: null,
            name: '公告列表',
            sort: null,
            type: 2,
            parentId: 2,
            permission: 'system:users:create',
          },
        ],
      },
      {
        id: 3,
        name: '任务中心',
        type: 1,
        url: '/main/taskesMG',
        icon: 'el-icon-setting',
        sort: 2,
        children: [
          {
            id: 31,
            url: '/main/taskesMG/taskMG',
            name: '任务管理',
            sort: 100,
            type: 2,
            parentId: 3,
          },
        ],
      },

      {
        id: 4,
        name: '员工中心',
        type: 1,
        url: '/main/analysis',
        icon: 'el-icon-monitor',
        sort: 1,
        children: [
          {
            id: 41,
            url: '/main/analysis/overview',
            name: '工作打卡',
            sort: 106,
            type: 2,
            children: null,
            parentId: 4,
          },
          {
            id: 42,
            url: '/main/analysis/overview',
            name: '工时统计',
            sort: 106,
            type: 2,
            children: null,
            parentId: 4,
          },
          {
            id: 43,
            url: '/main/analysis/overview',
            name: '个人信息',
            sort: 106,
            type: 2,
            children: null,
            parentId: 4,
          },
          {
            id: 44,
            url: '/main/analysis/overview',
            name: '支出列表',
            sort: 106,
            type: 2,
            children: null,
            parentId: 4,
          },
          {
            id: 45,
            url: '/main/analysis/overview',
            name: '支出申请',
            sort: 106,
            type: 2,
            children: null,
            parentId: 4,
          },
        ],
      },
      {
        id: 5,
        name: '审批中心',
        type: 1,
        url: '/main/system',
        icon: 'el-icon-setting',
        sort: 2,
        children: [
          {
            id: 51,
            url: '/main/system/user',
            name: '待审事项',
            sort: 100,
            type: 2,
            parentId: 2,
          },
          {
            id: 52,
            url: null,
            name: '审批列表',
            sort: null,
            type: 2,
            parentId: 2,
          },
        ],
      },
    ];
    this.menuList = info;
    // this.menuActive = localCache.getCache('menuActive');
  },
  methods: {
    onMenu(menu) {
      // localCache.setCache('menuActive', menu.id);
      this.$router.push({
        path: menu.url ?? '/notFound',
      });
    },

    touchstart(res) {
      clearTimeout(this.loop); //再次清空定时器，防止重复注册定时器
      this.loop = setTimeout(() => {
        console.log('长按了');
        console.log(res);
        res.preventDefault();
      }, 1000);
    },
    touchend() {
      clearTimeout(this.loop);
    },
  },
};
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      user-select: none;
    }
  }

  .el-menu {
    border-right: none;
    background-color: #0c2135;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
    .el-submenu__title span {
      color: #fff;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item {
    span {
      color: #fff;
    }
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu {
  .el-menu-item {
    background-color: #0c2135;
    color: #fff;
  }
  .el-menu-item.is-active {
    color: var(--el-color-primary);
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
.el-menu--vertical {
  .is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
