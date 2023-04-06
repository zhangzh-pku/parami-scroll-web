<template>
    <div>
        <h1>广告主视角</h1>
        <img src="../img/logo.png" alt="广告主" />
        <h2>请选择主题并设置激励</h2>
        <form @submit.prevent="submitForm">
            <label for="theme">主题：</label>
            <input id="theme" type="text" v-model="theme" required />
            <label for="reward">激励：</label>
            <input id="reward" type="number" v-model="reward" required />
            <button type="submit">提交</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            theme: '',
            reward: 0,
        };
    },
    methods: {
        submitForm() {
            // 提交表单数据到父组件
            this.$emit('submit', {
                theme: this.theme,
                reward: this.reward,
            });
            // 重置表单数据
            this.theme = '';
            this.reward = 0;
        },
    },
};
</script>

  