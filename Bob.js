class Bob{
    constructor(x, y, r){
        var options = {
    isStatic:false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
        }
       
    this.radius = r;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(world, this.body);
    }
    
    display(){
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        ////rotate(angle);  
        rectMode(CENTER);
        strokeWeight(4);
        stroke("cyan");
        fill(255);
       ellipse(0, 0, this.r, this.r);
    
        //rect(0, 0, this.width, this.height);
        pop();
      }
    };