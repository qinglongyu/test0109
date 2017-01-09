/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.store.UserStore',{
    extend:'Ext.data.Store',
    config:{
    model:'myApp.model.UserModel',
    data:[
        {userId:1,userName:'Tom',userPassword:'888',age:20,email:'tom@163.com'},
        {userId:2,userName:'Jack',userPassword:'888',age:21,email:'jack@sohu.com'},
        {userId:3,userName:'Mary',userPassword:'888',age:22,email:'mary@yahu.com'},
        {userId:4,userName:'Alex',userPassword:'888',age:23,email:'xlex@qq.com'},
        {userId:5,userName:'John',userPassword:'888',age:24,email:'jhon@live.com'},
        ],
    },
    //proxy:{},远程数据加载方式
});