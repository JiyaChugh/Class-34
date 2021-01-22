class Box{
    constructor(x,y,w,h){
        var opt ={
            restitution: 0.5,
            density:0.04,
            friction:1.2
        }
    
        this.body = Bodies.rectangle(x,y,w,h, opt);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black");
        stroke("chocolate");
        strokeWeight(6);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}