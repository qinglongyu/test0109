/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.controller.PageB',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            btnBack:'#btnBack', //引用视图中需要控制操作的组件
        },
        control:{
            btnBack:{
                tap:'GoPageA',  //设置控制组件执行的方法
            }
        }
    },
    GoPageA:function(){
            var pa = Ext.ComponentManager.get('pagea');//获取已经创建的面板a对象
            Ext.Viewport.setActiveItem(pa);     //在窗口中显示面板a对象
    },
    init:function(){
        console.log('控制器初始化了！');
    },
    launch:function(){
        console.log('控制器执行了！');
    }

});