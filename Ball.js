class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    score(){
        if(pos.x<300){
          score = score+500;
        }
      }
      
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
       }

    
   // if(ball.body.position.x>301 && ball.body.position.x<600){
   //   score=score+100;
   //   ball=null;
   // }

  //if(ball.body.position.x>601 && ball.body.position.x<900){
   // score = score+200;
  //  ball=null;
 // }
};