class Form{

    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Paint");
        this.greeting=createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title=createElement('h2');
        title.html("Painters Community");
        title.position(displayWidth/2-50,0);
    
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          painter.name=this.input.value();
          painterCount+=1;
          painter.index=painterCount;
          painter.update();
          painter.updateCount(painterCount);
          this.greeting.html("Hello"+painter.name);
          this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }  
}
