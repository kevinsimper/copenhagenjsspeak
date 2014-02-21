Crafty.init(16*28,16*14, document.getElementById('game'));
Crafty.background('#6b8cff');

Crafty.sprite(16, 'sprites/tileset.png', {
  ground: [0, 0],
  bush: [11, 9, 3]
});

Crafty.sprite(16, 'sprites/player.png', {
  mario: [6, 2]
});

var mario = Crafty.e('mario, 2D, Canvas, Fourway, Gravity, SpriteAnimation')
                  .attr({x: 16, y: 16, w: 16, h: 16, z:2})
                  .fourway(4)
                  .gravity('Floor');

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

for(var i = 0; i < 28; i++){
  var floor = Crafty.e('Floor, 2D, Canvas, ground, Fourway')
                    .attr({x: 16*i, y: 16*13, w: 16, h: 16});
}

var bush = Crafty.e('2D, Canvas, bush')
                 .attr({x: 16*10, y: 16*12, w: 16*3, h: 16}); 

