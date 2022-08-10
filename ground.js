class Ground
{
    constructor(x,y,w,h)
    {
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,{isStatic: true});
        World.add(world,this.body);
    }

    display()
    {
        var p = this.body.position;
        rectMode(CENTER); //make coordinates the center
        push();
        stroke("black");
        fill("red");
        rect(p.x,p.y,this.width,this.height);
        pop();
    }
}