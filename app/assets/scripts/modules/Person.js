class Person{
    constructor(name,favcolor){
        this.name=name;
        this.favcolor=favcolor;
    }

    greet(){
        console.log("Hello, my name is "+this.name+" and my favourite color is "+this.favcolor+".");
    }
}

export default Person