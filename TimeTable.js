class TimeTable{
    constructor(){  
        this.input1 = createInput("subject");
        this.submit=createButton("submit");
        this.input2 = createInput("subject");
        this.input3 = createInput("subject");
        this.input4 = createInput("subject");
        this.input5 = createInput("subject");
        this.input6 = createInput("subject");
        this.input7 = createInput("subject"); 

        this.input8 = createInput("subject");
        this.input9 = createInput("subject");
        this.input10 = createInput("subject");
        this.input11 = createInput("subject");
        this.input12 = createInput("subject");
        this.input13 = createInput("subject");
        this.input14= createInput("subject");

        this.input15 = createInput("subject");
        this.input16 = createInput("subject");
        this.input17 = createInput("subject");
        this.input18 = createInput("subject");
        this.input19 = createInput("subject");
        this.input20 = createInput("subject");
        this.input21= createInput("subject");
    
    }
    hide(){
        this.input1.hide();
        this.submit.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.input9.hide();
        this.input10.hide();
        this.input11.hide();
        this.input12.hide();
        this.input13.hide();
        this.input14.hide();
        this.input15.hide();
        this.input16.hide();
        this.input17.hide();
        this.input18.hide();
        this.input19.hide();
        this.input20.hide();
        this.input21.hide();
    
    }
    display(){

        var monday=createElement("h4");
        var tuesday=createElement("h4");
    var wednesday=createElement("h4");
    var thursday=createElement("h4");
    var friday=createElement("h4");
    var saturday=createElement("h4");
    var sunday=createElement("h4");

    
    monday.html("Monday");
    tuesday.html("Tuesday");
    wednesday.html("Wednesday");
    thursday.html("Thursday");
    friday.html("Friday");
    saturday.html("Saturday");
    sunday.html("Sunday");
    
    monday.position(200,100);
    tuesday.position(350,100);
    wednesday.position(500,100);
    thursday.position(650,100);
    friday.position(800,100);
    saturday.position(950,100);
    sunday.position(1100,100);


   var time1=createElement("h5");
   var time2=createElement("h5");
   var time3=createElement("h5");
    
    time1.html("4-5pm");
    time2.html("6-7pm");
    time3.html("8-9pm");

    time1.position(100,200);
    time2.position(100,250);
    time3.position(100,300);

    this.input1.position(200,200);
    this.input2.position(350,200);
    this.input3.position(500,200);
    this.input4.position(650,200);
    this.input5.position(800,200);
    this.input6.position(950,200);
    this.input7.position(1100,200);

    this.input8.position(200,270);
    this.input9.position(350,270);
    this.input10.position(500,270);
    this.input11.position(650,270);
    this.input12.position(800,270);
    this.input13.position(950,270);
    this.input14.position(1100,270);

    this.input15.position(200,340);
    this.input16.position(350,340);
    this.input17.position(500,340);
    this.input18.position(650,340);
    this.input19.position(800,340);
    this.input20.position(950,340);
    this.input21.position(1100,340);
 
       
        this.input1.show();
        this.input2.show();
        this.input3.show();
        this.input4.show();
        this.input5.show();
        this.input6.show();
        this.input7.show();
        this.input8.show();
        this.input9.show();
        this.input10.show();
        this.input11.show();
        this.input12.show();
        this.input13.show();
        this.input14.show();
        this.input15.show();
        this.input16.show();
        this.input17.show();
        this.input18.show();
        this.input19.show();
        this.input20.show();
        this.input21.show();

        this.submit.show();

        this.input1.position(200,200);
        this.submit.position(400,displayHeight-200);

        this.submit.mousePressed(()=>{

            user.answers.push(this.input1.value(),this.input2.value(),this.input3.value(),this.input4.value(),this.input5.value(),this.input6.value(),this.input7.value());
            
            user.answers.push(this.input8.value(),this.input9.value(),this.input10.value(),this.input11.value(),this.input12.value(),this.input13.value(),this.input14.value());

            user.answers.push(this.input15.value(),this.input16.value(),this.input17.value(),this.input18.value(),this.input19.value(),this.input20.value(),this.input21.value());

            user.update();
            

            console.log(user.answers);
        })
        
    }
}
