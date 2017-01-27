Ext.define('NotesApp.view.peticiones.PeticionesListadoV', {
	extend: 'Ext.Panel',
	alias: 'widget.peticionesListadoV',

	requires: ['Ext.dataview.List'],

	config: {
		fullscreen: true,
        layout:'vbox',
        items: [
				{
			        xtype: 'fwkheader'   
	        	},	
            	{
            		xtype: 'panel',
            		html: '<div class="title-subheader">All Contacts</div>',
            		cls: 'sub-header'
            	},
				{
					xtype: 'list',
					itemId:'listaContactos',
					scrollable: {
						direction: 'vertical',
						directionLock: true
					},
					store: 'agendaS',
					flex: 1,
					itemHeight: 65,
					onItemDisclosure: true,
					itemTpl: Ext.create('Ext.XTemplate',
								'<div class="peticion">',
				                 	'<div class="bloque-peticion-derecha">{phone}</div>',
				                 	'<div class="bloque-peticion-izquierda">',
				                 		'<strong>{name}</strong>',
				                 		'<p id="surname">{surname}</p>',
				                 	'</div>',
	            				 '</div>'
	            			 ),
					grouped:true
				},
				{
					layout:'hbox',
					cls: 'botones-detalle',
					items: [
			                  {
			                    xtype: 'button',
						        cls: 'boton-denegar',
						        iconCls:'add',
						        itemId: 'anadir',
						        flex:2
			                  }
					]
				}
		]
	}
});