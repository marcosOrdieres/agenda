Ext.define('NotesApp.view.peticiones.PeticionesEditarV', {
	extend: 'Ext.Panel',
	alias: 'widget.peticionesEditarV',
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
            		itemId:'submitEdit'
            	}
		]
	}
});