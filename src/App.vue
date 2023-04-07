<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="./img/iconic_gradientbg.png" width="30" height="30" class="d-inline-block align-top" alt="">
        <span class="ml-2 fs-4 fw-bold">PARAMI PROTOCOL</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="userInfoDropdown" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              {{ this.user }}
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userInfoDropdown" style="max-width: 200px;">
              <a class="dropdown-item" href="/view/user" @click="view = 'user'">I'm user</a>
              <a class="dropdown-item" href="/view/advertiser" @click="view = 'advertiser'">I'm advertiser</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: 'user', // 当前视图
    };
  },
};
</script>

<style>
/* 为内容容器添加样式 */
.content {
  padding: 20px;
}

/* 设置导航栏样式 */
.navbar {
  background-color: #fff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
}

/* 设置logo图片样式 */
.navbar-brand img {
  margin-right: 10px;
}

/* 设置下拉菜单的样式 */
.dropdown-menu {
  width: auto;
  background-color: #f8f9fa;
  z-index: auto;
}

/* 设置下拉菜单中选项的样式 */
.dropdown-item {
  color: #212529;
  font-size: 14px;
  padding: 10px;
}

/* 设置下拉菜单中选项被激活的样式 */
.dropdown-item.active,
.dropdown-item:active {
  background-color: #e9ecef;
  color: #212529;
}

/* 设置当前视图的样式 */
.current-view {
  font-weight: bold;
}
</style>
