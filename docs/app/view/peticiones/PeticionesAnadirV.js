Ext.define('NotesApp.view.peticiones.PeticionesAnadirV', {
	extend: 'Ext.Panel',
	alias: 'widget.peticionesAnadirV',

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
			        items: [{
			                xtype: 'fieldset',
			                id: 'regform',
			                title: 'Nuevo Contacto',
			               	items: [
			               		{
								    xtype: 'textfield',
								    label: 'Id',
								    labelWrap: true,
								    name: 'id',
								    id:'id',
								    placeHolder: 'Enter id'
							    },
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
							    },
							    {
					                xtype:"fileinput",
									name:'photo',
									id:'photo',
					                accept:"image/jpeg"
				                }
							]
						}
					]		
				},
				{
            		xtype: 'button',
            		text:'Añadir Contacto',
            		ui:'action',
            		itemId:'submit'
            	}
		]
	}
});