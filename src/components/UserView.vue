<template>
    <div>
        <h1>用户视角</h1>
        <img src="../img/logo.png" alt="用户" />
        <h2>请选择操作</h2>
        <button @click="claimReward">领取奖励</button>
        <button @click="postAd">发布广告</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        claimReward() {
            // 向后端请求领取奖励
            this.$emit('claim-reward');
        },
        postAd() {
            // 跳转到发布广告页面
            this.$emit('post-ad');
        },
    },
};
</script>
  