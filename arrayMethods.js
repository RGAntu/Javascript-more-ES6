const products = [
    {id: 1, name: "iphone", color: "black", price: 1200, brand: "apple"},
    {id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi"},
    {id: 3, name: "samsung", color: "gold", price: 1500, brand: "sam"},
    {id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple"},
    {id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi"}
]

// foreach Note: foreach ke diye array er opore ekta loop through korte parbo and eta kono noton array return kore na
products.forEach(product => {
   if(product.color === "black"){
    // console.log(product);
   }
})

//filter Note: filter noton ekta array return kore jar karone noton ekta variable nite hobe.

// filter je kono ekta condition onujai e sei value ke noton ekta array er bitore kore return kore ar conditon na mille empty array return kore

const newProducts = products.filter(product => product.price > 1000);
// console.log(newProducts);

// ekta ke bad diye sob gulu ke nibo
const newProduct1 = products.filter(product => product.id != 3);
// console.log(newProduct1)


// find Note : find ekta condition er opor depend kore ekta array er opor loop through kore  single ekta object return kore

// find e onk gula same value thakle loop kore prothom jeta pabe sudu seta ke return korbe sudu ekta jinis e return korbe er pore ar check korbe na

// const product = products.find(p => p.id === 4);
const product = products.find(p => p.color ==="gold");
// console.log(product)

