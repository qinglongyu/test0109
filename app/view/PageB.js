/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.view.PageB',{
    extend:'Ext.Panel',
    xtype:'pageb',
    config:{
        id:'pageb',
        style:'background-color:yellow',
        fullscreen:true,
        html:'SENCHA MVC PageB!',
        items:[
            {
                id:'btnBack',
                xtype:'button',
                text:'返回',
                width:150,
            }
        ]
    }
});
