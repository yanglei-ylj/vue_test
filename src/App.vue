<template>
    <div>
        <button>原生的按钮</button>
        <input type="text">
        <br>
        <br>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <br>
        <el-button type="warning">警告按钮</el-button>
        <el-date-picker v-model="value" type="date" placeholder="选择日期"></el-date-picker>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button, Row, DatePicker } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
    export default {
        name:'App',
        data() {
            return {
                value:''
            }
        },
    }
</script>

<style>
</style>