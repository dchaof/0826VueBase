
// /* eslint-disable no-unused-vars*/
//局部禁用当前这个类型的错误 （只禁用当前文件这个类型的报错）

// import Vue from 'vue'//默认引入的就是runtime-only 版本的，不带解析器
import Vue from 'vue/dist/vue.esm'//是我们自己找到的自带解析器的版本
import App from '@/App'

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})


//使用这个render函数的  为什么就可以用runtime-only版本的vue
/* new Vue({
    el:'#app',
    render: h => h(App)  //这个函数和上面自己写的 功能差不多
                        //1.定义并注册了APP
                        //2.使用了App组件
                        //3.比上面的写法多干了一件事，就是寻找解析器的loader
}) */

//以后我们要使用的是下面这种
//下面的打包出来项目体积小