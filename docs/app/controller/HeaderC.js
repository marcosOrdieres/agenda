Ext.define('NotesApp.controller.HeaderC', {
    extend: 'Ext.app.Controller',
    requires:[
    ],

    config: {
        refs: {
            headerMenu: 'fwkheader #headerMenu',
            logoutBtn: 'useroptionspopup #logout'
        },
        control: {
            headerMenu:{
                tap: 'onHeaderMenu'
            },
            logoutBtn: {
                tap: 'doLogout'
            }
        }
    },

    onHeaderMenu: function(btn) {
        if(this.userOptionsPopup == null)
            this.userOptionsPopup = Ext.create('NotesApp.view.UserOptionsPopup');        
        this.userOptionsPopup.showBy(btn,"tc-bc?");
    },
    
    /**
     * Se ejecuta cuando el usuario quiere cerrar su sesión.
     */ 
    doLogout: function(btn) {
        this.userOptionsPopup.hide();

		Ext.Msg.show({
                title : 'Cerrar sesión',
                message : '¿Desea cerrar sesión?',
                closable : false,
                buttons: [
                            {
                              text:'No',
                              buttonId: 'no'
                            },
                            {
                              text:'Si',
                              buttonId: 'si'
                            }
                ],
                cls: 'panelConfirmacion',
                multiline : false,
                fn: function(buttonId) {

                    if(buttonId == 'Si') {
                        document.location.reload();
                    }

                }
        });

    }

});
