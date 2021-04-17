class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background','white');

        this.access2 = createInput("Code2")
        this.access2 = position(150,950);
        this.access2.style('background','white');

        this.access3 = createInput("Code3")
        this.access3 = position(150,950);
        this.access3.style('background','white');

    }

    display(){

        // Add code to make the buttons function as expected

        this.button.mousePressed(()=>{
            if(system.athenticate(accessCode1,this.access1.value()))){
                this.button1.hide();
                this.access1.hide();

                this.button.mousePressed(()=>{
                    if(system.athenticate(accessCode2,this.access1.value()))){
                        this.button2.hide();
                        this.access2.hide();

                        this.button.mousePressed(()=>{
                            if(system.athenticate(accessCode3,this.access1.value()))){
                                this.button3.hide();
                                this.access3.hide();

            }
        }
    }
