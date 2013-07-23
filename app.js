require.config({

	paths : {
		"jquery" : "lib/jquery-2.0.2",
		"underscore" : "lib/underscore",
		"backbone" : "lib/backbone",
		"backbone_localStorage" : "lib/backbone_localStorage",
        "i18n": "lib/i18n"

	},
	shim : {
		'jQuery' : {
			exports : '$'
		},
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			exports : 'Backbone'
		},
		'backbone_localStorage' : {
			exports : 'Backbone.LocalStorage'
		}
	},
    //locale: localStorage.getItem('locale') || 'en-us'//'en-us'
    locale: 'fr-fr'
});

require(['models/StationaryList', 'views/StationaryListView',
    'underscore', 'jquery', /*'i18n!nls/ItemList',*/ 'Router', 'backbone', 'i18nHelper'],
    function( SList, ListView, _, $, /*Item,*/ Router, Backbone, Converter) {
        $(function() {
        //var RouteIt = new Router();
        //Backbone.history.start();

        var List = new StationaryList({pencil:"OtherPencil", eraser:"OtherEraser"});
        var view = new ListView({model:List});

        //console.log(Converter('items', 'pencil'));

        //List.set("pencil",Converter('pencil'));
        //List.set("eraser", Converter('eraser'));

          List.set("pencil","pencil");
          List.set("eraser", "eraser");

        });



    });

//use routers --


