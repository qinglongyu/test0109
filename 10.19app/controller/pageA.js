/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.controller.pageA',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            btnNext:'#btnNext', //引用视图中需要控制操作的组件
        },
        control:{
            btnNext:{
                tap:'GopageB',  //设置控制组件执行的方法
            }
        },
        routes:{
            'pagea':'showpageA',
        },
    },
    showpageA:function(){
        var pa = Ext.ComponentManager.get('pagea')
        Ext.Viewport.setActiveItem(pa);
    },
    GopageB:function(){
       //Ext.Msg.alert('去下一页！');
            /*var pb = Ext.ComponentManager.get('pageb');
            if(!pb){
                pb = Ext.create('myApp.view.pageB');
            }
            Ext.Viewport.setActiveItem(pb);*/
        this.redirectTo('pageb/10/200')
    },
    init:function(){
        console.log('控制器初始化了！');
    },
    launch:function(){
        console.log('控制器执行了！');
    }

});