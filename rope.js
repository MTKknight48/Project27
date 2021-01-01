class Rope{
    constructor(body1, body2,offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y: this.offsetY}
            
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        
    }

 
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("white");
        var A1x = pointA.x;
        var A1y = pointA.y;
        var A2x = pointB.x+this.offsetX;
        var A2y = pointB.y+this.offsetY;
        line(A1x,A1y,A2x,A2y);
        }
    }
    
}