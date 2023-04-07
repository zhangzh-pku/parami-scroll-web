<template>
    <div class="user-view">
        <div class="user-header">
        </div>
        <div class="user-actions">
            <button class="btn btn-lg btn-orange m-2" @click="claimReward">领取奖励</button>
        </div>
    </div>
</template>
  
<style>
.user-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 86px);
    margin-top: 20px;
}

.user-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.user-actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.btn-orange {
    background-color: #f90;
    color: #fff;
    border-color: #f90;
}

.btn-orange:hover {
    background-color: #f70;
    border-color: #f70;
}

.navbar {
    background-color: #fff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
}
</style>
  
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
  