Ext.define('NotesApp.view.login.LoginV', {
    extend:  Ext.form.Panel ,
    xtype: 'login',

    config: {
        baseCls:'app_login',
        scrollable: false,
        fullscreen: true
    },
    
    constructor: function(config) {
        config = config || {};
        config.items = this.fwkItems();
        this.callParent([config]);
    },

    fwkItems: function() {
        return [
            {
                xtype: 'panel',
                maxWidth: 400,
                itemId:'form_login',
                cls:'app_login',
                margin: '18% auto 0 auto',
                defaults:{
                    margin: '0 auto'
                },
                items: [{
                        xtype: 'label',
                        html: '<span style="color:white;font-size:15px;z-index:100;">ACCESO A LA AGENDA<span>',
                        width: 150
                    },{
                        xtype: 'textfield',
                        placeHolder: 'Usuario',
                        name: 'usuario',
                        itemId: 'usuario',
                        maxWidth: '68%',
                        margin: '70 auto 0 auto'
                    },{
                        xtype: 'passwordfield',
                        placeHolder: 'Contraseña',
                        name: 'password',
                        itemId: 'password',
                        maxWidth: '68%',
                        margin: '24 auto 0 auto'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Enviar',
                itemId: 'enviar',
                cls: 'app_login_button',
                maxWidth: '68%',
                margin: '20 auto',
                fwkEvent: 'login'
            }
        ];
    }
    
});