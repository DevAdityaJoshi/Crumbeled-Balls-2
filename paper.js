class Paper {
    constructor(x, y, radius) {
    var options = {

    isStatic:false,
    restitution:0.1,
    fricition:0.1,
    density:1.2,

    }

    this.body = Bodies.circle(x, y, radius);
    this.image = loadImage("paper.png");
    this.radius = radius;
    
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    fill("yellow");
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
    }

};