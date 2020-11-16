class Tree {
    constructor (x,y,width,height) {
        var options = {
            isStatic: true
        }
  
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Plucking mangoes/tree.png");
        World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      scale(4.5);
     // rectMode(CENTER);
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,120,80,100,150);
      pop();
    }
  }