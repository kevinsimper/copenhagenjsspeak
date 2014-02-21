Crafty.init(16*28,16*14, document.getElementById('game'));
Crafty.background('#6b8cff');

Crafty.defineScene('Intro', function(){
  Crafty.e("2D, DOM, Image")
    .image("sprites/intro.png")
    .attr({x: 120, y: 20, w: 316, h: 171});

  Crafty.e("2D, DOM, Text, Mouse")
    .attr({ x: 130, y: 150, w: 200, h: 100 })
    .text("Click here to start playing!")
    .textColor('#FFFFFF')
    .textFont({family: 'Courier'})
    .unselectable()
    .bind('Click', function() {
      Crafty.enterScene('Play');
    })
});

Crafty.defineScene('Play', function(){
  Crafty.sprite(16, 'sprites/player.png', {
    mario: [0, 2]
  });

  var mario = Crafty.e('mario, 2D, Canvas, Fourway, Gravity, SpriteAnimation, Collision')
                    .attr({x: 16, y: 16, w: 16, h: 16, z:2})
                    .fourway({x: 4, y: 5.5})
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

  mario.bind('Moved', function(old){
    if(this.hit('Solid') || this.hit('Blocks') || this.hit('PushBlocks')){
      this.attr({x: old.x});
      this.attr({y: old.y});
    }
  });


  jQuery.getJSON('tiled/world-1-2.json', function(data){
    Crafty.e('2D, Canvas, TiledMapBuilder')
      .setMapDataSource(data)
      .createWorld(function(tiledmap){
        var grounds = tiledmap.getEntitiesInLayer('Ground');
        for(var ground = 0; ground < grounds.length; ground++){
          // console.log(grounds[ground]);
        }
        var solids = tiledmap.getEntitiesInLayer('Solid');
        for(var solid = 0; solid < solids.length; solid++){
          solids[solid].visible = false;
        }
      });
  });

  Crafty.viewport.follow(mario, 0, 0);
});

Crafty.enterScene('Intro');