class MenuAnimation extends Component{
    
    
    constructor(){
        var str="Mips Education Game";
        
        super("MenuAnimation",str,50,25,0,10,false);
        this.speedX = 0;
        this.speedY = 0;    
        this.gravity = 0.1;
        this.gravitySpeed = 0;
<<<<<<< HEAD
        this.bounce = 0.6;
=======

>>>>>>> origin/development
    }

    hitBottom () {

        var rockbottom = 320/3 - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }

    }
    move(){

        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();

    }
    
    update(){
 	 

        CTX.clearRect(this.x, this.y - 40, CTX.measureText("Mips Education Game").width, 49);
        CTX.font = "40px Arial";
        this.move();
  
        CTX.strokeText("Mips Education Game",this.x,this.y);

    }

}
