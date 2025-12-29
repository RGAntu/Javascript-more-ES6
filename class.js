class product3 {
    // CEO = "Redoy Ghosh Antu";

    constructor(name,price,brand,ceo){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.ceo = ceo;
    }
    details(){
        // console.log("Details", this.name)
        // console.log(`ami ${this.name} product er details`)
    }
}

const iphone = new product3("iphone","1234","apple","Jobs"); // new keyword chara  class ta ke instant toiri kora jabe na mane copy ta toiri kora jabe na
// console.log(iphone.details());
// console.log(iphone)

// iphone.details()



const xiaomi = new product3("redmi",1000,"xiaomi","lei jun");
// console.log(xiaomi)
// xiaomi.details()

 