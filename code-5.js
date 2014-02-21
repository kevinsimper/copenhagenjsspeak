Crafty.init(16*28,16*14, document.getElementById('game'));
Crafty.background('#6b8cff');

Crafty.sprite(16, 'sprites/tileset.png', {
  ground: [0, 0],
});

Crafty.sprite(16, 'sprites/player.png', {
  mario: [0, 2]
});

var mario = Crafty.e('mario, 2D, Canvas, Fourway, Gravity')
                  .attr({x: 16, y: 16, w: 16, h: 16})
                  .fourway(4)
                  .gravity('Floor');

for(var i = 0; i < 28; i++){
  var floor = Crafty.e('Floor, 2D, Canvas, ground, Fourway')
                    .attr({x: 16*i, y: 16*13, w: 16, h: 16});
}