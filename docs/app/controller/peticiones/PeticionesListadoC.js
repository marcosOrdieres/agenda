Ext.define('NotesApp.controller.peticiones.PeticionesListadoC', {
    extend: 'Ext.app.Controller',
    requires:[
    ],

    config: {
        refs: {
            peticionesListadoV: 'peticionesListadoV',
            peticionesAnadirV: 'peticionesAnadirV',            
            list: 'peticionesListadoV list',
            buttonAnadir: 'peticionesListadoV #anadir',
            volver: 'peticionesListadoV #volver'
        },
        control: {
            list:{
                itemtap: 'onItemtap'
            },
            buttonAnadir:{
                tap:'onAnadirTap'
            },
            peticionesListadoV:{
                activate:'onInitialize'
            }
        }
    },

    onItemtap: function(item, index, target, record, e, eOpts ) {
        var peticionesDetalleV = Ext.create('NotesApp.view.peticiones.PeticionesDetalleV');
        peticionesDetalleV.setRecord(record);
        Ext.Viewport.add(peticionesDetalleV);
        Ext.Viewport.setActiveItem(peticionesDetalleV);
    },

    onAnadirTap: function() {
        Ext.Viewport.remove(this.getPeticionesListadoV());
        var peticionesAnadirV = this.getPeticionesAnadirV();

        if (peticionesAnadirV) {
            Ext.Viewport.setActiveItem(peticionesAnadirV);
        } else {
            peticionesAnadirV = Ext.create('NotesApp.view.peticiones.PeticionesAnadirV')
            Ext.Viewport.add(peticionesAnadirV);
            Ext.Viewport.setActiveItem(peticionesAnadirV);
        }
    },
    onInitialize:function(){
        this.getList().getStore('agendaS').load();
    }
});
