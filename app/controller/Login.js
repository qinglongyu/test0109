/**
 * Created by x on 2016/10/19.
 */
Ext.define('myApp.controller.Login',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            userName:'#userName',       //每个ref组件引用变量，系统自动添加一个get方法
            userPassword:'#userPassword',
            btnLogin:'#btnLogin',
        },
        control:{
            btnLogin:{
                tap:'login',
            }
        }
    },
    login:function(){
        var uName = this.getUserName().getValue();
        var uPwd = this.getUserPassword().getValue();

        var store = Ext.StoreManager.get('UserStore');
        var result = 0;
        for(var i = 0 ; i < store.getCount() ; i++){
            var name = store.getAt(i).get('userName');
            var pwd = store.getAt(i).get('userPassword');
            if(uName == name  && uPwd == pwd){
                this.redirectTo('bookpage/' + name);
                //Ext.Msg.alert('登录成功！');
                result = 1;
                break;
            }
        }
        if(!result)
        {
            Ext.Msg.alert('登录失败！');
        }
    }
});