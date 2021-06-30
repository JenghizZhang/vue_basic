const atguigu = {
    // Vue.use会调用install方法，传入Vue构造函数和options
    install(Vue, options){
        //添加全局指令
        Vue.directive('upper-text', function(el, binding){
            el.innerText += binding.value.toUpperCase()
        });
        // 给Vue自身添加属性
        Vue.qwes = '自定义插件';
        // 给Vue原型上添加属性
        Vue.prototype.$random = function(min, max){
            return Math.floor(Math.random()*(max-min) + min)
        }
    }
}
