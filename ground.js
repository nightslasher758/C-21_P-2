class Ground
{
    constructor(x, y, w, h) {

     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     
     var ground_options={
      isStatic:true

     }
     
     this.body = Bodies.rectangle(x, y, w, h, ground_options)
    World.add(world, this.body)
    

    

    }


display(){  
var pos = this.body.position;

push()
translate(pos.x, pos.y);
rectMode(CENTER)
fill("blue")
strokeWeight(4);
rect(0, 0, this.w, this.h);
pop()



}
}
