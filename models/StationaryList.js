/**
 * Created with JetBrains WebStorm.
 * User: abhay
 * Date: 16/7/13
 * Time: 5:29 PM
 * To change this template use File | Settings | File Templates.
 */
define(['backbone', 'i18nHelper'], function(Backbone, i18nHelper){

   StationaryList = Backbone.Model.extend({



      defaults:{
          pencil:"noPencil",
          eraser:"noEraser",
          Converter: i18nHelper

      },

      initialize:function(){
          console.log('This model has been initialized.');

      }


   });

    return StationaryList;
});