define([
    'cog',
    'three'
], function(cog, THREE) {

    var THREESystem = cog.System.extend({

        configure: function() {

        }

    });

    cog.THREESystem = THREESystem;

    return THREESystem;
});