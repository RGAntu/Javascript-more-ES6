class person4{
    #status
    constructor(name,age,status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep(){
        console.log(`${this.name} sleep at 10pm`)
    }
    action(){
        console.log(this.#status)
    }
}

const SolimUddin = new person4("solim", 12, "single");

// SolimUddin.sleep()
SolimUddin.action()

const korimUddin = new person4("korim", 12);

// korimUddin.sleep()

