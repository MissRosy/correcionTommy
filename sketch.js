var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score =0;

var gameState = "play";
var count;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  
  if(gameState == "end"){
    textSize(100);
    text("GameOver",150,250);
  }
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
       if(ball.body.position.y>760){

        if(ball.body.position.x<300){
         score=score+500;
         ball = null;
        
         //if(count>=5) gameState="end"; Este if esta ahí solo existiendo sin llaves y sin nada por eso te marcaba error
        }else // este else es para la siguiente condicion para cuando cae en 100
        if(ball.body.position.x>300 && ball.body.position.x<500){
          score=score+100;
          ball=null;
     
      //if(count>=5) gameState="end";
     } //AQUI TENDRÍAS QUE AGREGAR EL OTRO ELSE/ IF PARA LA ULTIMA CONDICION CUANDO CAE EN 200
       }
    
      //TODO ESTO YA NO IBA, YA NO TENÍAS QUE PONER DE NUEVO EL IF DE POSITION MENOR QUE 760
        /*if(ball.body.position.y>760){
      
         if(ball.body.position.x>601 && ball.body.position.x<900){
            score = score+200;
            ball=null;
         
          if(count>=5) gameState="end";
         }
        }*/      
      
  }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed(){
  //if(gameState!=="end"){
  //count++;
  ball=new Ball(mouseX, 10, 10, 10); 
 //}

}

