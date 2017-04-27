require(["util", "jquery"], function(util, $) {
    console.log($(document));
})
define( "unit",
        ['jQuery'],
        function( jQuery ){
          return { foo : "bar" };
        }
);
requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        }
    }
});