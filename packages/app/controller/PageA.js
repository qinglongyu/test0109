/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.controller.PageA',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            btnNext:'#btnNext', //引用视图中需要控制操作的组件
        },
        control:{
            btnNext:{
                tap:'GoPageB',  //设置控制组件执行的方法
            }
        }
    },
    GoPageB:function(){
       //Ext.Msg.alert('去下一页！');
            var pb = Ext.ComponentManager.get('pageb');
            if(!pb){
                pb = Ext.create('myApp.view.PageB');
            }
            Ext.Viewport.setActiveItem(pb);
    },
    init:function(){
        console.log('控制器初始化了！');
    },
    launch:function(){
        console.log('控制器执行了！');
    }

});