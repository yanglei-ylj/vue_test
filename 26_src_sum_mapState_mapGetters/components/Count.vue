<template>
    <div class="count">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大十倍后为：{{bigSum}}</h3>
        <h3>我在{{school}},学习{{subject}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="oddAdd">当前求和为奇数再加</button>
        <button @click="waitAdd">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1 //用户选择的数字
            }
        },
        computed: {
            //靠程序员自己亲自去写计算属性
            // sum(){
            //     return this.$store.state.sum
            // },
            // school(){
            //     return this.$store.state.school
            // },
            // subject(){
            //     return this.$store.state.subject
            // },

            //借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

            //借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','school','subject']),
            /*********************************************************/
            //靠程序员自己亲自去写计算属性
            // bigSum(){
                //     return this.$store.getters.bigSum
            // },
            //借助mapGetters生成计算属性，从getters中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'}),
            //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['bigSum']),
        },
        methods: {
            add(){
                this.$store.commit('JIA',this.n)
            },
            sub(){
                this.$store.commit('JIAN',this.n)
            },
            oddAdd(){
                this.$store.dispatch('jiaOdd',this.n)
            },
            waitAdd(){
                this.$store.dispatch('jiaWait',this.n)
            }
        },
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>