class Dropes{
    constructor(x,y) {
           var options={
            'restitution':0.01,
            'friction':0.1
           }
         this.rain = Bodies.rectangle(x, y,5 , options);
         this.radius = 5;
         World.add(world, this.rain);
            
       }

  update(){
        if(this.rain.position.y > height){


          Matter.Body.setPosition(this.rain, {x:random(0 ,400), y:random(0,400)}); 
        }
  }

  showDrop(){
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(this.rain.position.x, this.rain.position.y, this.radius);
   }
  }
  