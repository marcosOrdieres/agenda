 Ext.define('NotesApp.controller.peticiones.PeticionesDetalleC', {
    extend: 'Ext.app.Controller',
    models : ['NotesApp.model.agendaM'],
    views:['NotesApp.view.peticiones.PeticionesDetalleV',
    'NotesApp.view.peticiones.PeticionesEditarV'],

    requires:[
    ],

    config: {
    	refs: {
            ref : 'agendaForm',
            peticionesDetalleV: 'peticionesDetalleV',
            volver: 'peticionesDetalleV #volver',
            contenidoDetalle: 'peticionesDetalleV #contenido-detalle',
            peticionesSuprimirV: 'peticionesSuprimirV',
            buttonSuprimir: 'peticionesDetalleV #suprimir',
            buttonEdit:'peticionesDetalleV #edit',
            peticionesEditarV:'peticionesEditarV',
            list: 'peticionesListadoV list',
            submitEdit:'peticionesDetalleV #submitEdit'
        },
        control: {
            volver: {
            	tap: 'onTapVolver'
            },
            peticionesDetalleV: {
                activate: 'onActivate'
            },
            buttonSuprimir:{
                tap:'onSuprimirTap'
            },
            buttonEdit:{
                tap:'onEdit',
            },
            ist:{
                itemtap: 'onEdit'
            },
            submitEdit:{
                tap:'callback'
            },
        }
    },

    onTapVolver: function() {
    	Ext.Viewport.remove(this.getPeticionesDetalleV());
        var peticionesListadoV = this.getPeticionesDetalleV();

      	if (peticionesListadoV) {
        	Ext.Viewport.setActiveItem(peticionesListadoV);
      	} else {
      		peticionesListadoV = Ext.create('NotesApp.view.peticiones.PeticionesListadoV')
        	Ext.Viewport.add(peticionesListadoV);
        	Ext.Viewport.setActiveItem(peticionesListadoV);
      	}
        peticionesListadoV.down("list").deselectAll();
    },

    onActivate: function(newActiveItem, panel, oldActiveItem) {
        var store = Ext.getStore('agendaS').load(); 
    },

    onSuprimirTap: function(newActiveItem) {
        Ext.Msg.confirm(
            "Suprimir Contacto",
            "¿Desea suprimir este contacto?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    Ext.Ajax.request({
                        url: 'http://localhost:8080/Crunchy/rest/users/'+document.getElementsByTagName("b")[0].childNodes[0].nodeValue,
                        method: 'DELETE',
                        callback: function(options, success, response) {
                            console.log(response.responseText);
                            var store = Ext.getStore('agendaS');
                                store.load({
                                    scope   : this,
                                    callback: function(records, operation, success) {
                                        console.log(records);
                                        }
                                });
                                console.log(store);                      
                        }
                    });              
                }
            }
        );
    },

    onEdit:function(newActiveItemitem, index, target, record, e, eOpts,onSubmitEdit){
        //var peticionesDetalleV = this.getPeticionesDetalleV();
        Ext.Msg.show({
                title : 'Editar Contacto',
                message : '¿Desea editar este contacto?',
                closable : true,
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

                           var popup = Ext.Viewport.add({
                                xtype: 'panel',
                                itemId:'submitEdit',
                                centered: true,
                                floating: true,
                                closable : false,
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                items: [
                                    {
                                        items: [{
                                                xtype: 'fieldset',
                                                id: 'regform',
                                                title: 'Editar Contacto',
                                                items: [
                                                    {
                                                    xtype: 'textfield',
                                                    label: 'Name',
                                                    labelWrap: true,
                                                    name: 'name',
                                                    placeHolder: 'Enter Name',
                                                    id:'name'
                                                    },
                                                    {
                                                    xtype: 'textfield',
                                                    label: 'Surname',
                                                    labelWrap: true,
                                                    name: 'surname',
                                                    placeHolder: 'Enter Surname',
                                                    id:'surname'
                                                    },
                                                    {
                                                    xtype: 'emailfield',
                                                    label: 'Email',
                                                    labelWrap: true,
                                                    name: 'email',
                                                    placeHolder: 'email@example.com',
                                                    id:'email'
                                                    },
                                                    {
                                                    xtype: 'textfield',
                                                    label: 'Phone Number',
                                                    component:{
                                                        type:'tel'
                                                    },
                                                    labelWrap: true,
                                                    name: 'phone',
                                                    placeHolder: '+34',
                                                    id:'phone'
                                                    }
                                                ]
                                            }
                                        ]       
                                    },
                                    {
                                        xtype: 'button',
                                        text:'Editar Contacto',
                                        ui:'action',
                                        handler: function(button, item, index, target, record, e, eOpts){
                                            Ext.Ajax.request({
                                                url: 'http://localhost:8080/Crunchy/rest/users/'+document.getElementsByTagName("b")[0].childNodes[0].nodeValue,
                                                method: 'PUT',
                                                jsonData:{
                                                    //id : Ext.ComponentQuery.query("#id")[0].getValue(),
                                                    name : Ext.ComponentQuery.query("#name")[0].getValue(),
                                                    surname : Ext.ComponentQuery.query("#surname")[0].getValue(),
                                                    email : Ext.ComponentQuery.query("#email")[0].getValue(),
                                                    phone : Ext.ComponentQuery.query("#phone")[0].getValue()
                                                },
                                                //Refrescar todas las pantallas
                                                waitTitle: 'Connecting',
                                                waitMsg: 'Sending data...',                     
                                                callback: function(options, success, response,form,action) {
                                                    console.log(response.responseText); 
                                                    Ext.Viewport.down('#submitEdit').hide();
                                                    var store = Ext.getStore('agendaS').load();
                                                }
                                            });
                                        }
                                    }
                                ]
                            });
                    }
                }
        });
    }
});