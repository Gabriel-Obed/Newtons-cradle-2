class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA, 
            pointB: pointB, 
            angularStiffness: 0.04, 
            length: 220
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.x, pointB.y, pointA.x, pointA.y)
            pop();
        }
    }
}