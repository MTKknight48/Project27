class Bob {
constructor(x,y,){
    var options={
      isStatic: false,
        restitution: 0.8,
        friction: 0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,25,options);
    this.radius=25;

    World.add(world,this.body);
  }
display(){
var pos =this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);

//DeviceRotationRate(angle);
ellipseMode(RADIUS);
fill("pink");
ellipse(0,0,this.radius);
pop();
}



}
