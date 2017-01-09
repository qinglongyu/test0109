/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.controller.PageB',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            btnBack:'#btnBack', //引用视图中需要控制操作的组件,
            pageb:{
                selector:'#pageb',
                xtype:'pageb',
                autoCreate:true,//关键代码
            }
        },
        control:{
            btnBack:{
                tap:'GoPageA',  //设置控制组件执行的方法
            }
        },
        routes:{
            'pageb/:id/:num':'showPageB',
        }
    },
    showPageB:function(id,num)
    {
        console.log('传入的参数是:',id,num);
        //var pb = Ext.ComponentManager.get('pageb');
        var pb = this.getPageb();   //获取本视图对象
        Ext.Viewport.setActiveItem(pb);
    },
    GoPageA:function(){
            //var pa = Ext.ComponentManager.get('pagea');//获取已经创建的面板a对象
            //Ext.Viewport.setActiveItem(pa);     //在窗口中显示面板a对象
            this.redirectTo('pagea');  //跳转到pagea
    },
    init:function(){
        console.log('控制器初始化了！');
    },
    launch:function(){
        console.log('控制器执行了！');
    }

});