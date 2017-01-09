/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.model.UserModel',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'userId',type:'int'},
            'userName',
            'userPassword',
            {name:'age',type:'int'},
            'email'
        ],
    }
});