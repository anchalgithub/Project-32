//blueprint
class Block {
  //used for intializing an object
      constructor(x, y, width, height) {
  var options = {
   //bounciness of an object
   'restitution':0.8,
  //the oppisite force which applies on the object
    'friction':0.3,
    //total mass/total weight of an object
    'density':1.0
        }
        this.visibilty =255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

    
      }
      display(){
      
        console.log(this.body.speed)
        //making sure the boxes slowly vanish from the screen when the polygon hits it.
        if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;
        //its going to adjust the different position of an object
        push();
        //changing the position
        translate(pos.x, pos.y);
        //when they collide, they bounce off each other and are different angles.
        rotate(angle);
        //for placing the rectangle in the middle of the canvas
        rectMode(CENTER);
        //the canvas is white
        fill(255);
        //the rectangles width/height
        rect(0, 0, this.width, this.height);
        //for reseting all the settings.
         pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           
        pop();
      }
      }

      //score
     score (){
    if (this.visibilty<0&& this.visibilty >=105)
    score ++;
     }
    
    };