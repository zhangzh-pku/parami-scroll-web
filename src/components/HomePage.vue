<template>
    <div class="container">
        <button class="login-button" @click="connectMetaMask">login via metamask</button>
        <div v-if="view === 'advertiser'">
            <advertiser-view @submit="submitReward"></advertiser-view>
        </div>
        <div v-else-if="view === 'user'">
            <user-view @claim-reward="claimReward" @post-ad="postAd"></user-view>
        </div>
    </div>
</template>
  
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-button {
    margin-bottom: 16px;
    background-color: #ff7f00;
    /* 橙色背景 */
    color: white;
    /* 白色文本 */
    font-size: 18px;
    /* 更大的字体大小 */
    padding: 12px 24px;
    /* 更大的内边距 */
    border: none;
    /* 移除边框 */
    border-radius: 4px;
    /* 圆角 */
    cursor: pointer;
    /* 更改鼠标指针样式 */
}
</style>
  

<script>
import { ethers } from "ethers";
import { inject } from 'vue';
export default {
    data() {
        return {
            view: 'user', // 当前视图
        };
    },
    setup() {
        const store = inject('store');
        return { store };
    },
    methods: {
        setSigner(newSigner) {
            this.store.signer = newSigner;
        },
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
        setup() {
            const store = inject('store');
            return { store };
        },

        async connectMetaMask() {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const account = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    const customTestnetRpcUrl = 'https://alpha-rpc.scroll.io/l2';
                    var provider = new ethers.providers.JsonRpcProvider(customTestnetRpcUrl);
                    var signer = provider.getSigner(account[0]);

                    // vue3 中使用ethers.js链接metamask，需要记录signer，给我提供多个解决方案
                    // 如果可以使用localStorage 也请展示
                    this.setSigner(signer);
                    console.log('test signer:', signer);
                    this.isConnected = true;
                    this.$router.push('/view/advertiser')
                } catch (error) {
                    alert('error')
                    console.log("Error connecting to MetaMask:", error);
                }
            } else {
                alert("MetaMask not detected. Please install it.");
            }
        },

    },
};
</script>