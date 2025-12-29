const mobiles = [
  {
    "brand": "Samsung",
    "model": "Galaxy S23",
    "display": "6.1 inch AMOLED",
    "ram": "8 GB",
    "storage": "128 GB",
    "battery": "3900 mAh",
    "camera": "50 MP",
    "os": "Android"
  },
  {
    "brand": "Apple",
    "model": "iPhone 14",
    "display": "6.1 inch OLED",
    "ram": "6 GB",
    "storage": "128 GB",
    "battery": "3279 mAh",
    "camera": "12 MP",
    "os": "iOS"
  },
  {
    "brand": "Xiaomi",
    "model": "Redmi Note 12",
    "display": "6.67 inch AMOLED",
    "ram": "6 GB",
    "storage": "128 GB",
    "battery": "5000 mAh",
    "camera": "48 MP",
    "os": "Android"
  },
  {
    "brand": "OnePlus",
    "model": "Nord CE 3",
    "display": "6.7 inch AMOLED",
    "ram": "8 GB",
    "storage": "128 GB",
    "battery": "5000 mAh",
    "camera": "50 MP",
    "os": "Android"
  },
  {
    "brand": "Realme",
    "model": "Realme 11",
    "display": "6.4 inch AMOLED",
    "ram": "8 GB",
    "storage": "256 GB",
    "battery": "5000 mAh",
    "camera": "108 MP",
    "os": "Android"
  },
  {
    "brand": "Oppo",
    "model": "A78",
    "display": "6.56 inch LCD",
    "ram": "8 GB",
    "storage": "128 GB",
    "battery": "5000 mAh",
    "camera": "50 MP",
    "os": "Android"
  },
  {
    "brand": "Vivo",
    "model": "Y100",
    "display": "6.38 inch AMOLED",
    "ram": "8 GB",
    "storage": "128 GB",
    "battery": "4500 mAh",
    "camera": "64 MP",
    "os": "Android"
  },
  {
    "brand": "Motorola",
    "model": "G73",
    "display": "6.5 inch LCD",
    "ram": "8 GB",
    "storage": "128 GB",
    "battery": "5000 mAh",
    "camera": "50 MP",
    "os": "Android"
  },
  {
    "brand": "Nokia",
    "model": "G42",
    "display": "6.56 inch LCD",
    "ram": "6 GB",
    "storage": "128 GB",
    "battery": "5000 mAh",
    "camera": "50 MP",
    "os": "Android"
  },
  {
    "brand": "Infinix",
    "model": "Note 30",
    "display": "6.66 inch LCD",
    "ram": "8 GB",
    "storage": "256 GB",
    "battery": "5000 mAh",
    "camera": "64 MP",
    "os": "Android"
  }
]



    
// mobiles.forEach(Element => {
//     console.log(Element.battery);
// })


// const camera = mobiles.map( (camera, id) => {
//     return camera.camera 
// });
// console.log(camera);


const battery = mobiles.filter(mobile =>{
    return mobile.battery < "5000 mAh"
      
})
console.log(battery)

// const model = mobiles.find(element => {
//     return element.model === "iPhone 14";
// });
// console.log(model)

