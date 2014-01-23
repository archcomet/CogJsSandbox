(function() {
    'use strict';

    require.config({
        paths: {
            'cog': 'libs/cog',
            'box2d': 'libs/box2d',
            'three': 'libs/three'
        },

        shim: {
            'box2d': { exports: 'Box2D' },
            'three': { exports: 'THREE' }
        }
    });

    require([
        'cog',
        'cog-box2d',
        'cog-three'
    ], function(cog, Box2DSystem, THREESystem) {

        var game = cog.createDirector();

        game.systems.add(Box2DSystem);
        game.systems.add(THREESystem);
        game.start();

        window.game = game;
    });

}());