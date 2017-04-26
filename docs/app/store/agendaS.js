Ext.define('NotesApp.store.agendaS', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NotesApp.model.agendaM',
        storeId: 'agendaS',
        autoLoad: true,
        autoSync: true,
        sorters: 'name',
        grouper: {
           groupFn: function(record) {
               return record.get('name')[0];
           }
        },
         proxy: {
            type: 'rest',
            url: 'http://localhost:8080/Crunchy/rest/users',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            }
        }
    }
});