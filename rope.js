class Rope{
    constructor(bodyA,pointB){
    var opt={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:320
    }
    this.pointB=pointB;
this.rope=Constraint.create(opt);
World.add(world,this.rope);
  }
  display(){
      if(this.rope.bodyA){
      var pointA=this.rope.bodyA.position;
      var pointB=this.pointB;
      push();
      stroke("white");
      strokeWeight(3);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
  }
}
}