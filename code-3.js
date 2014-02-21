Crafty.init(16*28,16*14, document.getElementById('game'));

var mario = Crafty.e('2D, Canvas, Color, Fourway, Gravity')
                  .attr({x: 16, y: 16, w: 16, h: 16})
                  .color('red')
                  .fourway(4)
                  .gravity('Floor');

var floor = Crafty.e('Floor, 2D, Canvas, Color, Fourway')
                  .attr({x: 0, y: 16*13, w: 16*28, h: 16})
                  .color('brown');