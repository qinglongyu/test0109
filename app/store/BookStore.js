/**
 * Created by x on 2016/10/20.
 */
Ext.define('myApp.store.BookStore',{
    extend:'Ext.data.Store',
    config: {
        model: 'myApp.model.BookModel',
        autoLoad:true,
        autoDestroy:true,
        //远程数据加载方式
        proxy:{
            type:'ajax',
            url:'bookInfo.json',
            reader:{
                type:'json',
                rootProperty:'books'
            }
        },
    }
});

