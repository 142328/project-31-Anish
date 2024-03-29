  var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight = 300;
  var score =0;

 function setup() 
 {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) 
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for(var j = 25; j <=width-20; j=j+50 )
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for(var j = 0; j <width-30; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects

  for(var j = 40;j <=width;j = j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15;j <=width-10;j = j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = -10;j <=width-20;j = j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  
  for(var j = -30;j <=width-30;j = j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var l = 0; l < divisions.length; l++) 
  {
    particles[l].display();
  }

}