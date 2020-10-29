class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.chain1 =loadImage("sprites/sling1.png")
this.chain2= loadImage("sprites/sling2.png")
this.chain3= loadImage("sprites/sling3.png")

        World.add(world, this.sling);
    
        
        
    }

    attach(x){
        this.sling.bodyA= x
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
                strokeWeight(10);  
            }
            else{
                strokeWeight(5);
            }
            
            stroke(49,23,8)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            image(this.chain3, pointA.x-25, pointA.y-10, 15,30)
 }
image(this.chain1, 200, 20)
image(this.chain2, 170, 20)

    }
    
}