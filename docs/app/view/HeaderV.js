Ext.define('NotesApp.view.HeaderV', {
   extend:'Ext.Container',
   xtype:'fwkheader',
   config: {
   },

   initialize: function(){
       this.setItems ([{
           xtype: 'container',
           cls: 'app_header',
           height: 70,
           docked: 'top',
           layout: {
               type: 'hbox',
               align: 'stretch'
           },
           items: [
			           {
			               xtype: 'panel',
			               cls: 'app-header-logo',
			               width: 212
			           },
			           {
			                xtype: 'button',
			                itemId: 'headerMenu',
			                text: '',
			                width: 100,
			                cls: 'app-header-menu',
			                icon: 'resources/images/flecha-menu-header.png',
			                iconAlign: 'right'
			            }
            ]
       }]);
   }

});