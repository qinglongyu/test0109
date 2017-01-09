/**
 * Created by x on 2016/10/19.
 */

Ext.define('myApp.model.BookModel',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'id',type:'int'},
            'image_url',
            'book_name',
            'author',
            'description'
        ],
    }
});