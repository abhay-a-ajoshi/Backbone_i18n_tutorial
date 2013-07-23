/**
 * Created with JetBrains WebStorm.
 * User: abhay
 * Date: 16/7/13
 * Time: 6:06 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $){

    var RecordView = Backbone.View.extend({

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

