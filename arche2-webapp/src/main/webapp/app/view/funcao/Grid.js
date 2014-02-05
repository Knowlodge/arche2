var funcaoRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

Ext.define('Arche2.view.funcao.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.funcaogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Funcoes',
    frame: false,
    minHeight: 200,
    plugins: [funcaoRowEditing],
    
    columns: [{
        text: 'Nome da Função de Medição',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Algoritmo',
        flex: 1,
        sortable: true,
        dataIndex: 'algoritmo',
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
        store: 'Funcoes',
        displayInfo: true,
        displayMsg: 'Mostrando Funcoes {0} - {1} de {2}',
        emptyMsg: "Nenhuma funcao encontrada."
    }]
});