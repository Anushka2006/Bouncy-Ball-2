class Ground{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,400,20, options);
    }
    
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 400,20);
    }
}