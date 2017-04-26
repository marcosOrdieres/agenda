Ext.define('NotesApp.view.peticiones.PeticionesSuprimirV', {
	extend: 'Ext.Panel',
	alias: 'widget.peticionesSuprimirV',

	config: {
		fullscreen: true,
        layout:'vbox',
        cls: 'detalle-peticion',
        items: [
        		{
	                xtype: 'fwkheader'
            	},
                {
                    xtype: 'panel',
                    cls: 'sub-header',
                    layout:'hbox',
                    height: 50,
                    items: [
                              {
                                xtype: 'button',
                                itemId: 'volver',
                                cls: 'boton-volver',
                                text: 'Volver'
                              },
                              {
                                xtype: 'panel',
                                itemId: 'fecha-detalle',
                                cls: 'fecha-detalle',
                                tpl: Ext.create('Ext.XTemplate', '<div class="title-subheader fecha-detalle">{phone}</div>')
                              }
                    ]
                },
            	{
            		xtype: 'panel',
            		html: '<div class="title-subheader">Suprimir Contacto</div>',
            		cls: 'sub-header'
            	},
				{
					xtype: 'input',
					placeHolder:'Name'
				}
		]
	}
});