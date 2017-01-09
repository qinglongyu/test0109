/**
 * Created by x on 2016/10/20.
 */
//定义XTemplate模板
var dvTpl = new Ext.XTemplate('<tpl for=".">',
    '<table>',
    '<tr>',
    '<td rowspan="2"><img src="{image_url}"></td>',
    '<td><span class="title">{book_name}</span></td>',
    '</tr>',
    '<tr>',
    '<td style="padding-left:10px;">简介:<span class="green">{description:ellipsis(30)}</span></td>',
    '</tr>',
    '</table>',
    '</tpl>');
//定义图书信息视图类
Ext.define('myApp.view.BookPage',{
    extend:'Ext.Panel',
    xtype:'bookpage',
    config:{
        id:'bookpage',
        style:'background-color:pink',
        fullscreen:true,
        items:[
            {
                id:'bookdv',
                xtype:'dataview',
                store:'BookStore',
                itemTpl:dvTpl,
                height:600,
                items:[
                    {
                        id:'dvpanel',
                        xtype:'panel',
                        docked:'top',
                        html:'欢迎您',
                        style:'background-color:blue;color:white'
                    }
                ]
            }
        ]
    }
});