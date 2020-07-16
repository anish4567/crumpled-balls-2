class paper{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
      }
    };
