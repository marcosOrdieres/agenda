Ext.define('NotesApp.view.peticiones.PeticionesDetalleV', {
	extend: 'Ext.Panel',
	alias: 'widget.peticionesDetalleV',
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
			                  	tpl: Ext.create('Ext.XTemplate', '<div class="title-subheader fecha-detalle">{id}</div>')
			                  }
	                ]
            	},
            	{
					xtype: 'panel',
					itemId: 'contenido-detalle',
					cls: 'contenido-detalle',
					scrollable: true,
					flex: 1,
					tpl: Ext.create('Ext.XTemplate',
										'<div class="detalle">',
						                 	'<h1>{email}</h1>',
						                 	'<div class="bloque-detalle">',
						                 		'<h2>Datos del Contacto</h2>',
						                 		'<p id="agendaId"><b>{id}</b></p>',
						                 		'<p>Nombre : <strong>{name}</strong></p>',
						              			'<p>Apellidos: <strong>{surname}</strong></p>',
						              			'<p>Email: <strong>{photo}</strong></p>',
						                 		'<p id="phone">Teléfono:  <strong>{phone}</strong></p>',
						                 	'</div>'
			            			)
				},
				{
					layout:'hbox',
					cls: 'botones-detalle',
					items: [
			                  {
			                    xtype: 'button',
			        			cls: 'boton-autorizar',
			        			itemId: 'suprimir',
			        			text: 'Suprimir',
			                  },
			                  {
			                  	
			                  	xtype:'button',
								cls: 'boton-denegar',
								itemId: 'edit',
			        			text: 'Edit',
			                  }
					]
				}
		]
	}
});
