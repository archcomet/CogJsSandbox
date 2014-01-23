define([
    'cog',
    'box2d'
], function(cog, Box2D) {

    var Box2DSystem = cog.System.extend({

        configure: function() {

        }

    });

    cog.Box2DSystem = Box2DSystem;

    return Box2DSystem;
});