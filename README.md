Backbone_i18n_tutorial
======================

Here, I am using i18nHelper, which provides abstraction to i18n lib, in app I have only used the helper to localize.

The helper provides Convert function, which takes 2 parameters 1. key 2. collection, 
where collection is name of the collection in json file and key is actual key in the collection.
If value of collection is null then default collection would be used.

main advantage of this approach - There will be only single module in which you refer i18n and  translation json. 
In the rest of the app, you can use the function. Thus, you can expose this in a model (which deal with data and I think should deal with localization as well)
and a view need not to talk with i18n at all. Also, if you need to change path for translation, only at single point you can change for respective data.   

