var subCaracteristicaRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

Ext.define('Arche2.view.subcaracteristica.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.subcaracteristicagrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'SubCaracteristicas',
    frame: false,
    minHeight: 200,
    plugins: [subCaracteristicaRowEditing],
    
    columns: [{
        text: 'Caracteristica',
        flex: 1,
        sortable: true,
        dataIndex: 'caracteristica',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.Caracteristicas'),
            queryMode: 'local',
            typeAhead:true,
            forceSelection: true,
            displayField: 'nome',
            valueField: 'nome'
        }
    },{
        text: 'Nome',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    }],
    
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Adcionar',
            iconCls: 'icon-add',
            action: 'add'
        }, '-', {
            text: 'Excluir',
            iconCls: 'icon-delete',
            action: 'delete'
        }]
    },{
        xtype: 'pagingtoolbar',
        dock:'bottom',
        store: 'SubCaracteristicas',
        displayInfo: true,
        displayMsg: 'Mostrando SubCaracteristicas {0} - {1} de {2}',
        emptyMsg: "Nenhuma Subcaracteristica encontrada."
    }]
});