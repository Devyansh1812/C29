class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //load the images in the computer memory so that we can use it further 
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //display the static image,one that doent move hence no body needs to be created 
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //use clourzilla plugin to get the concentration of red green blue colours to get brown colour for the rubber band
            //gives colour of the line
            stroke(48,22,8);
            //check if the bird is behind or in front of the sling shot and then decide the position of the base of the rubber ban d
            //the base of the rubberband should not be behind the bird 
            if(pointA.x<220){
                //to give thickness to the rubberband to give the elastic effect (thick when not strecthed and thin when stretched)

                strokeWeight(7);
                //draw the rubberband with its base 
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
           
        }
    }
    
}