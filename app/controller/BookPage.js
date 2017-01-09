/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.controller.BookPage',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            bookpage:{
                selector:'#bookpage',
                xtype:'bookpage',
                autoCreate:true,
            },
            dvpanel:'#dvpanel',
        },
        control:{},
        routes:{
           'bookpage/:name':'showBookPage'
        }
    },
    showBookPage:function(name){
        var bp = this.getBookpage();
        var dvpanel = this.getDvpanel();
        dvpanel.setHtml(name);
        Ext.Viewport.setActiveItem(bp);
    }
});