<template>
    <div>
        <h1>用户注册</h1>
        <form @submit.prevent="submitForm">
            <label for="username">用户名：</label>
            <input id="username" type="text" v-model="username" required />
            <label for="password">密码：</label>
            <input id="password" type="password" v-model="password" required />
            <label for="confirmPassword">确认密码：</label>
            <input id="confirmPassword" type="password" v-model="confirmPassword" required />
            <button type="submit">注册</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        submitForm() {
            // 向后端发送注册请求
            console.log('发送注册请求', {
                username: this.username,
                password: this.password,
            });
            // 重定向到登录页面
            this.$router.push('/login');
        },
    },
};
</script>
  