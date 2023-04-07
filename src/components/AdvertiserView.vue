<template>
    <div class="advertiser-view">
        <div class="advertiser-header"></div>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label class="label-class">theme:</label>
                <input id="theme" type="text" class="form-control" v-model="theme" required />
            </div>
            <div class="form-group">
                <label class="label-class">reward:</label>
                <div class="input-group">
                    <input id="reward" type="float" class="form-control" v-model="reward" required />
                    <div class="input-group-append">
                        <span class="input-group-text">ETH</span>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-lg btn-orange">提交</button>
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
            if (this.reward < 0) {
                alert('reward less than zero are not allowed')
            } else {
                this.$emit('submit', {
                    theme: this.theme,
                    reward: this.reward,
                });
                alert('submit success!')
                // 重置表单数据
                this.theme = '';
                this.reward = 0;
            }
        },
    },
};
</script>
<style>
.label-class {
    color: #000;
}

.advertiser-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 86px);
}

.advertiser-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
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
</style>