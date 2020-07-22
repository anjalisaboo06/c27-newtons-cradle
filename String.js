class String{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    var options={
    bodyA:bodyA, 
    bodyB:bodyB, 
    pointB:{x:this.offsetX, y:this.offsetY}
    //stiffness: 0.04,
   // length:10
    }
    this.String=Constraint.create(options);
    World.add(world, this.String);
    
    }
    display(){
    
    var pointA = this.String.bodyA.position;
    var pointB = this.String.bodyB.position;
    var pointAX = pointA.x;
    var pointAY = pointA.y;

    var pointBX = pointB.x+this.offsetX;
    var pointBY = pointB.y+this.offsetY;

    strokeWeight(5);
    stroke("green");
    line(pointAX, pointAY, pointBX, pointBY);
    
    
    }
    
    
    }