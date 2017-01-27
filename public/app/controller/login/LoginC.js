Ext.define('NotesApp.controller.login.LoginC', {
    extend: 'Ext.app.Controller',
    requires:[
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            botonEnviar: 'login #enviar',
            usuario: 'login #usuario',
            password: 'login #password',
            loginForm: 'login'
        },
        control: {
            botonEnviar:{
                tap: 'login'
            },
            botonRecuperar:{
                tap: 'goToRecuperar'
            },
            botonRegistro:{
                tap: 'goToRegistroNuevo'
            }
        }
    },

    login: function(){
        var peticionesListadoV = Ext.create('NotesApp.view.peticiones.PeticionesListadoV')
        Ext.Viewport.add(peticionesListadoV);
        Ext.Viewport.setActiveItem(peticionesListadoV);
    }

});
