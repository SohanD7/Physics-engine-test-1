class Ball
{
    constructor(x,y,r)
    {
        this.radius = r;
        this.body = Bodies.circle(x,y,r,{restitution:1});
        World.add(world,this.body);
    }

    display()
    {
        var p = this.body.position
        ellipseMode(RADIUS);
        push();
        fill("blue");
        stroke("white");
        ellipse(p.x,p.y,this.radius);
        pop();
    }
}