/* 定义所有组件的配置信息，并没有创建，因为没有调用Vue.extend() */

// 配置组件模板结构，template标签最后不会到页面上
<template>
    <div>
        <h2 class="title">学校的名字是{{name}}</h2>
        <h2 class='info' @click="showInfo">学校的地址是{{address}}</h2>
    </div>
</template>

// 配置组件数据、交互、事件等
<script>
// 直接写传给Vue.extend()里的对象并暴露
// 值暴露了组件的配置，并没有创建组件
export default {
    data(){
        return {
            name:'atguigu',
            address:'宏富科技园',
        }
    },
    methods:{
        showInfo(){
            alert('学校地址为'+this.address)
        }
    }
}
</script>

// 配置组件样式
<style lang="css">
    .title{
        background-color: aqua;
    }
    .info{
        background-color: pink;
    }
</style>
