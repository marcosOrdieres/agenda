 Ext.define('NotesApp.controller.peticiones.PeticionesEditarC', {
    extend: 'Ext.app.Controller',
    models : ['NotesApp.model.agendaM'],
    views:['NotesApp.view.peticiones.PeticionesEditarV',
            'NotesApp.view.peticiones.PeticionesDetalleV'],

    requires:[],

    config: {
    	refs: {
    		ref : 'agendaForm',
            peticionesEditarV: 'peticionesEditarV',
            peticionesDetalleV: 'peticionesDetalleV',
            peticionesListadoV: 'peticionesListadoV',
            volver: 'peticionesEditarV #volver',
            submitEdit:'peticionesEditarV #submitEdit',
            contenidoDetalle: 'peticionesDetalleV #contenido-detalle'
        },
        control: {
            volver: {
            	tap: 'onTapVolver'
            },
            submitEdit:{
            	tap:'onSubmitEdit'
            },
            peticionesDetalleV:{
            	activate:'onActivate'
            }
        }
    },

    onTapVolver: function() {
    	Ext.Viewport.remove(this.getPeticionesEditarV());

        var peticionesDetalleV = this.getPeticionesListadoV();

      	if (peticionesDetalleV) {
        	Ext.Viewport.setActiveItem(peticionesDetalleV);
      	} else {
      		peticionesDetalleV = Ext.create('NotesApp.view.peticiones.PeticionesListadoV')
        	Ext.Viewport.add(peticionesDetalleV);
        	Ext.Viewport.setActiveItem(peticionesDetalleV);
      	}

    },

    onActivate: function(newActiveItem, panel, oldActiveItem,record) {
        this.getContenidoDetalle().setData(newActiveItem.getRecord().data);    
    },
 
    onSubmitEdit: function(item, index, target, record, e, eOpts ){
        Ext.Msg.show({
                title : 'Editar Contacto',
                message : '¿Desea editar este contacto?',
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
                fn: function(buttonId, record) {
                       
                        if(buttonId == 'Si') {
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
                                    callback: function(options, success, response) {
                                        console.log(response.responseText);                           
                                    }
                                }); 
                        }
                }
        });
    }
});



   