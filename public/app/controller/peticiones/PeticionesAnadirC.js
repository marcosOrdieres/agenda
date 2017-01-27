 Ext.define('NotesApp.controller.peticiones.PeticionesAnadirC', {
    extend: 'Ext.app.Controller',
    stores:['NotesApp.store.agendaS'],
    views:['NotesApp.view.peticiones.PeticionesAnadirV'],
    requires:[
    ],

    config: {
    	refs: {
            peticionesAnadirV: 'peticionesAnadirV',
            volver: 'peticionesAnadirV #volver',
            buttonSubmit: 'peticionesAnadirV #submit',
            regForm:'#regform',
            agendaS:'agendaS',
            contenidoDetalle: 'peticionesDetalleV #contenido-detalle',

        },
        control: {
            volver: {
            	tap: 'onTapVolver'
            },
            buttonSubmit:{
                tap:'onSubmit'
            }
        }
    },

    onTapVolver: function() {
    	Ext.Viewport.remove(this.getPeticionesAnadirV());

        var peticionesListadoV = this.getPeticionesAnadirV();

      	if (peticionesListadoV) {
        	Ext.Viewport.setActiveItem(peticionesListadoV);
      	} else {
      		peticionesListadoV = Ext.create('NotesApp.view.peticiones.PeticionesListadoV')
        	Ext.Viewport.add(peticionesListadoV);
        	Ext.Viewport.setActiveItem(peticionesListadoV);
      	}
        peticionesListadoV.down("list").deselectAll();
              var store = Ext.getStore('agendaS').load();  
              console.log(store);
    },

    onSubmit: function(){
        var peticionesListadoV = this.getPeticionesAnadirV();

        Ext.Msg.show({
                title : 'Nuevo Contacto',
                message : '¿Desea añadir un contacto?',
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
                         if(((Ext.ComponentQuery.query("#id")[0]).getValue() != "")){

                              Ext.Ajax.request({
                                url: 'http://localhost:8080/Crunchy/rest/users/',
                                method: 'POST',
                                jsonData:{
                                    id : Ext.ComponentQuery.query("#id")[0].getValue(),
                                    name : Ext.ComponentQuery.query("#name")[0].getValue(),
                                    surname : Ext.ComponentQuery.query("#surname")[0].getValue(),
                                    email : Ext.ComponentQuery.query("#email")[0].getValue(),
                                    phone : Ext.ComponentQuery.query("#phone")[0].getValue(),
                                    photo : Ext.ComponentQuery.query("#photo")[0].getValue().replace("\\","\\\\")
                                },
                     
                                callback: function(options, success, response) {
                                    console.log(response.responseText);                           
                                }
                            });
                              
                    } else if (((Ext.ComponentQuery.query("#id")[0]).getValue() == "")) {
                                     Ext.Msg.show({
                                        title : 'Recuerda',
                                        message : '¡Debes rellenar los campos!',
                                        closable : false,
                                        buttons: [
                                                    {
                                                      text:'OK',
                                                      buttonId: 'OK'
                                                    }
                                        ],
                                        cls: 'panelConfirmacion',
                                        multiline : false,
                                        fn: function(buttonId) {
                                            Ext.Viewport.add(peticionesListadoV);
                                            Ext.Viewport.setActiveItem(peticionesListadoV);
                                        }
                                });
                    } 
                    }

                }
        });

    }
});