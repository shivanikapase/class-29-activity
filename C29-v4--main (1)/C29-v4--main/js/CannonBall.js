class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//create a circle 
this.body=Bodies.circle(x,y,this.r,options)
//load the image
this.image=loadImage("assets/cannonball.png")
    World.add(world, this.body);
  }

  shoot() {
    var velocity=p5.Vector.fromAngle(cannon.angle);
    velocity.mult(30)
    //set the angle of ball to cannon
   Matter.Body.setStatic(this.body,false)
    //set static value to the body
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    //set the velocity for the ball to make the ball to move
    

    
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//display the image
image(this.image,0,0,this.r,this.r)
    pop();

    }
  }

