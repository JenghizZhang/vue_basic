// 配置组件的模板结构
<template>
    <div>
        <School />
    </div>
</template>

// 配置组件的数据、交互、事件
<script>
    // 引入school组件的配置，不用Vue.extend，脚手架环境自动创建
    import School from './components/School.vue'

    export default {
        components:{School}
    }
</script>