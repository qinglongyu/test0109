/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.view.pageA',{
    extend:'Ext.Panel',
    xtype:'pagea',
    config:{
        id:'pagea',
        style:'background-color:pink',
        fullscreen:true,
        html:'HELLO SENCHA MVC!',
        items:[
            {
                id:'btnNext',
                xtype:'button',
                text:'去下一页',
                width:150,
            }
        ]
    }
});