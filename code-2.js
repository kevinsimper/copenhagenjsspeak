Crafty.init(512,224, document.getElementById('game'));

var mario = Crafty.e('2D, Canvas, Color, Fourway')
                  .attr({x: 16, y: 16, w: 16, h: 16})
                  .color('red')
                  .fourway(4);