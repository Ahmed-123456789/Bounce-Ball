const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var engine1, world1 ;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine1 = engine.create();
  world1 = engine1.world ;
  var ground_options = {
    isStatic:true
  }

  ground = bodies.rectangle(200, 390, 200, 20,ground_options);
  world.add(world1,ground);
  var ball_options = {
    restitution: 1.0
  }
 ball  = bodies.circle(200, 100, 20, ball_options)
world.add(world1, ball);

}

function draw() {
  background("black"); 
  engine.update(engine1); 
 rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 50, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20)
}