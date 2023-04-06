<template>
    <div>
        <h1>账户设置</h1>
        <form @submit.prevent="submitForm">
            <label for="username">用户名：</label>
            <input id="username" type="text" v-model="username" required />
            <label for="password">密码：</label>
            <input id="password" type="password" v-model="password" required />
            <label for="confirmPassword">确认密码：</label>
            <input id="confirmPassword" type="password" v-model="confirmPassword" required />
            <label for="view">视角：</label>
            <select id="view" v-model="view">
                <option value="user">用户视角</option>
                <option value="advertiser">广告主视角</option>
            </select>
            <button type="submit">保存</button>
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
            view: 'user',
        };
    },
    methods: {
        submitForm() {
            // 向后端发送用户信息更新请求
            console.log('发送用户信息更新请求', {
                username: this.username,
                password: this.password,
                view: this.view,
            });
        },
    },
};
</script>
  