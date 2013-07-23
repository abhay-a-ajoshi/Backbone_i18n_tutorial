/**
 * Created with JetBrains WebStorm.
 * User: abhay
 * Date: 16/7/13
 * Time: 6:06 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', 'underscore', 'jquery', 'i18n!nls/ItemList'], function(Backbone, _, $, Item){

    var RecordView = Backbone.View.extend({

//this  will represent a single row of the table for an employee
        Convert: Item,
        el:"#ListItemsContainer",
        template: _.template($('#ListItemConverter').html()),
        initialize: function() {
            this.model.on( 'all', this.render, this)},
        render:function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return $(this.el);
        }



    });

    return RecordView;

});

