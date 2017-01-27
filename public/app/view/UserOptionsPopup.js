Ext.define('NotesApp.view.UserOptionsPopup', {
    extend: 'Ext.Panel',
    xtype: 'useroptionspopup',
    requires: [],    
    closable:true,    
    config: {        
        showAnimation: !Ext.browser.is.AndroidStock2 ? {
            type: 'fadeIn',
            duration: 250,
            easing: 'ease-out'
        } : null,

        hideAnimation: !Ext.browser.is.AndroidStock2 ? {
            type: 'fadeOut',
            duration: 250,
            easing: 'ease-out'
        } : null,
                
        cls: 'app_overlay',
        modal : true,
        hideOnMaskTap: true,
        centered : true,
        scrollable : null,
        layout: {
            type: 'vbox',
            align: 'middle',
            pack: 'middle'
        },
        padding: 0,
        width: 150
    },   
    
    initialize : function(){
        this.callParent(arguments);
        var fullscreenOn = 0;
        if (document.fullscreenElement || document.webkitFullscreenElement || 
                document.mozFullScreenElement || document.msFullscreenElement)
            fullscreenOn = 1;        
	        this.setItems([			
	            {
	                xtype: 'button',
	                itemId: 'logout',
	                text: 'Cerrar sesión',
	                width: '100%'
	            }]
	        );        
    	}

});