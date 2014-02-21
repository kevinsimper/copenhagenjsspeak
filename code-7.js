Crafty.init(16*28,16*14, document.getElementById('game'));
Crafty.background('#6b8cff');

Crafty.sprite(16, 'sprites/player.png', {
  mario: [0, 2]
});

var mario = Crafty.e('mario, 2D, Canvas, Fourway, Gravity, SpriteAnimation')
                  .attr({x: 16, y: 16, w: 16, h: 16, z:2})
                  .fourway(4)
                  .gravity('Ground');
mario.reel('Standing', 0, [[6,2]])
mario.reel('RunningRight', 300, [[0,2], [1,2], [2,2], [3,2]]);
mario.bind('NewDirection', function(direction){
  if (direction.x > 0){
    this.pauseAnimation().animate('RunningRight', -1)
  }
  if(!direction.x && !direction.y) {
    this.animate('Standing');
  }
});


jQuery.getJSON('tiled/world-1.json', function(data){
  Crafty.e('2D, Canvas, TiledMapBuilder')
    .setMapDataSource(data)
    .createWorld(function(tiledmap){
      var grounds = tiledmap.getEntitiesInLayer('Ground');
      for(var ground = 0; ground < grounds.length; ground++){
        console.log(grounds[ground]);
      }
    });
});