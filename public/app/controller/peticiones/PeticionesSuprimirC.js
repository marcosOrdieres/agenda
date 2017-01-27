 Ext.define('NotesApp.controller.peticiones.PeticionesSuprimirC', {
    extend: 'Ext.app.Controller',
    requires:[
    ],

    config: {
        refs: {
            peticionesSuprimirV: 'peticionesSuprimirV',
            volver: 'peticionesSuprimirV #volver',
            contenidoDetalle: 'peticionesDetalleV #contenido-detalle'
        },
        control: {
            volver: {
                tap: 'onTapVolver'
            },
            peticionesDetalleV: {
                activate: 'onActivate'
            }
        }
    },

    onTapVolver: function() {
        Ext.Viewport.remove(this.getPeticionesSuprimirV());
        var peticionesListadoV = this.getPeticionesSuprimirV();
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
            this.getContenidoDetalle().setData(newActiveItem.getRecord().data);    
    }
});