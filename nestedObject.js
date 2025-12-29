const person = {
    name: "Antu",
    1: "100",
    true: "abcde",
    age : 23,
    friends : ["Sujon", "Tonim"],
    details: {
        job: "yes",
        isMarried: true,
        status: "not found",
        father: {
            name: "Uttam Ghosh"
        }
    }
}

// console.log(person.website.link); // cannot read property "link" of null

// optional chaining
// when do I need optional chaining : jokhn amra object er bitore nested kono value ke access korte cachi kintu somehow oi value ta undefined ache ba kothao nai ei type er thakle amra question mark dite pari (?), question mark dile er ager value ta jodi falsy hoy tahole error dibe na dibe undefined
// console.log(person.details.father.name);
// console.log(person.details.hobby?.watchMovie)
// console.log(person?.sports?.cricket);


// dot vs bracket notation 
// dot
// console.log(person.name);
// console.log(person.1); // we cannot use this in dot notation

// bracket
// Inside bracket you have to use quotation otherwise it will show a undefined error
// console.log(person["age"]);
// console.log(person["details"]["father"]["name"]);
// console.log(person[1]);
