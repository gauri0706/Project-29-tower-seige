class Polygon {
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:3
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(50,200,20, options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        /* var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle); */
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        //ellipse(0,0,this.r);
        //pop();
    } 
}