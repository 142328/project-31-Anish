class Particle
{
    constructor(x, y,options) 
    {
        var options = 
        {
            
        }

        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
       
    }

     display()
     {
        this.color = (random(0,255),random(0,255),random(0,255));
     }
}

