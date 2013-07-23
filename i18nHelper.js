/**
 * Created with JetBrains WebStorm.
 * User: abhay
 * Date: 19/7/13
 * Time: 11:28 AM
 * To change this template use File | Settings | File Templates.
 */
define(['i18n!nls/ItemList'], function(ItemConverterList){

   var Converter = function(key, CollectionName){

      if ((CollectionName == null) || (CollectionName == undefined) || (CollectionName == ''))
          CollectionName = 'items';

       return ItemConverterList[CollectionName][key];




   }

   return Converter;



});