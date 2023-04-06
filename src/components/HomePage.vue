<template>
    <div>
        <h1>Wellcome to parami world</h1>
        <button @click="goToLogin">登录</button>
        <div v-if="view === 'advertiser'">
            <advertiser-view @submit="submitReward"></advertiser-view>
        </div>
        <div v-else-if="view === 'user'">
            <user-view @claim-reward="claimReward" @post-ad="postAd"></user-view>
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
    methods: {
        submitReward(rewardInfo) {
            // 向后端提交激励信息
            console.log('提交激励信息', rewardInfo);
            // 切换视图
            this.view = 'user';
        },
        claimReward() {
            // 向后端请求领取奖励
            console.log('请求领取奖励');
        },
        postAd() {
            // 跳转到发布广告页面
            console.log('跳转到发布广告页面');
        },
        goToRegister() {
            // 跳转到注册页面
            this.$router.push({ name: 'register' });
        },
        goToLogin() {
            // 跳转到登录页面
            this.$router.push({ name: 'Login' });
        },
    },
};
</script>
  