<template>
    <div class="container">
        <button class="login-button" @click="loginWithMetamask">login via metamask</button>
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
        async loginWithMetamask() {
            try {
                const loggedIn = localStorage.getItem('address');
                if (loggedIn) {
                    this.$router.push('/view/user')
                }
                // 检查 window.ethereum 对象是否存在
                if (typeof window.ethereum !== 'undefined') {
                    // 请求以太坊账户
                    const provider = await window.ethereum.request({ method: 'eth_requestAccounts' });

                    // 检查是否成功获取以太坊账户
                    if (provider.length) {
                        // 获取以太坊地址并存储到本地存储中
                        const address = provider[0];
                        localStorage.setItem('address', address);
                        // 重定向到用户视图页面
                        this.$router.push('/view/advertiser');
                    } else {
                        // 用户未授权访问钱包，显示错误信息
                        alert('No Metamask wallet found or user denied permission.');
                    }
                } else {
                    // window.ethereum 对象不存在，显示错误信息
                    alert('Metamask is not installed or not accessible. Please install or enable Metamask and try again.');
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while logging in with Metamask. Please try again later.');
            }
        }

    },
};
</script>
  