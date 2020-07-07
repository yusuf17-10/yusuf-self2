class Form{
    constructor(){
        this.input = createInput("username");
        this.password=createInput("","password");
        this.button = createButton("login");
        this.greeting=createElement("h3");
                
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.password.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("TimeTable");
        title.position(displayWidth/2-40,0);

      

       this.input.position(displayWidth/2-50,displayHeight/2-80);
       this.button.position(displayWidth/2-50,displayHeight/2);
       this.password.position(200,100);
      

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.password.hide();

            user.password= this.password.value();
            user.name= this.input.value();
            userCount++;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);

            this.greeting.html("hello "+ user.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            timetable.display();
        });
      
        
    }
}