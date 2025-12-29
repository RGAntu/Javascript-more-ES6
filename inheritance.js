class Vehical{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("I can move")
    }
}

class Bus extends Vehical{
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log("dhaka to cox's");
    }
}

const greenLine = new Bus("greenLine","12", 50);
// console.log(greenLine)

// greenLine.move()