class Base {
    constructor(x,y,w,h,color,isStatic) {
        var options={
            isStatic:isStatic
        }
   this.body=Bodies.rectangle(x,y,w,h,options)
   this.w=w;
   this.h=h;
   this.color=color;
  
      World.add(engine.world, this.body);}
  
     
  
    show() {
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     rectMode(CENTER)
     fill(this.color)
    rect(0,0,this.w,this.h)
    pop();
    }
}
    