// let hello =  name =>"hello " + name
// console.log(hello ("haashir"));


// var array = [32,44,56,78,95,36,77,81]
// var oddnums = array.filter((data,  ind) => data%2===1)
// var evennums = array.filter((data,  ind) => data%2===0)
// var largernums = array.filter((data,  ind) => data<100)
// console.log("odd nums",oddnums);
// console.log("even nums",evennums);
// console.log("largernums",largernums);
// var oddnums = []
// var evennums = []
// array.forEach((data,ind) =>{
//     console.log(data);
// if (data % 2 ===1) {
//     oddnums.push(data)
// } else {
//     evennums.push(data)
// }

// })
// console.log ( "oddnums", oddnums);
// console.log("evennums",evennums);

// console.log(search);

// var container = document.getElementById("container") 
let products = [
    { id: 1, 
        title: "t900 ultra",
            price: 1900,
            description:
              "available all types of smartwatches ",
            category: "smart watches",
            image: "download.jpg",
    },
    { id: 2, 
        title: "t900 ultra 2",
            price: 2100,
            description:
              "available all types of smartwatche ",
            category: "smart watches",
            image: "download (1).jpg",
    },
    { id:3, 
        title: "t800 ultra 2",
            price: 1800,
            description:
              "available all types of smartwatche ",
            category: "smart watches",
            image: "download (3).jpg",
    },
    { id:4, 
        title: "t800 ulta ",
            price: 1500,
            description:
              "available all types of smartwatche ",
            category: "smart watches",
            image: "download (2).jpg",
    },
    { id:6, 
        title: "t500 ultra ",
            price: 1200,
            description:
              "available all types of smartwatche ",
            category: "smart watches",
            image: "download (5).jpg",
    },
    { id:5, 
        title: "t500  ",
            price: 1000,
            description:
              "available all types of smartwatches ",
            category: "smart watches",
            image: "download (4).jpg",
    },
    { id:7, 
        title: "m10 earbuds ",
            price: 1050,
            description:
              "available all types of earbuds",
            category: "earbuds",
            image: "download (6).jpg",
    },
    { id:8, 
        title: "m11  ",
            price: 1400,
            description:
              "available all types of earbuds ",
            category: "earbuds ",
            image: "download (7).jpg",
    },
    { id:9, 
        title: "m19 ",
            price: 1600,
            description:
              "available all types of earbuds ",
            category: "earbuds",
            image: "download (8).jpg",
    },
    { id:10, 
        title: "m20  ",
            price: 2000,
            description:
              "available all types of earbuds ",
            category: "earbuds",
            image: "download (9).jpg",
    },
     { id:11, 
        title: "earpods pro 2  ",
            price: 5000,
            description:
              "available all types of earpods ",
            category: "earpods",
            image: "download (10).jpg",
    },
     { id:12, 
        title: "earpods pro  ",
            price: 3000,
            description:
              "available all types of earpods ",
            category: "earpods",
            image: "download (11).jpg",
    },
]
var search_input= document.getElementById("search")
var category= document.getElementById("category")
var prices= document.getElementById("prices")
category.addEventListener("change",function () {
    console.log(this.value);
    var categorywiseproducts = products.filter((data)=> data.category ==this.value)
    container.innerHTML = ""
    categorywiseproducts.forEach((data,ind) =>{
     var ele = createelement(
         data.title,
         data.category, 
         data.price,
         data.description?.slice(0 ,  10000),
         data.image);
 
         container.innerHTML += ele
     })})
     prices.addEventListener("change",function () {
      console.log(this.value);
      var priceswiseproducts = products.filter((data)=> data.price > this.value)
      container.innerHTML = ""
      priceswiseproducts.forEach((data,ind) =>{
       var ele = createelement(
           data.title,
           data.category, 
           data.price,
           data.description?.slice(0 ,  10000),
           data.image);
   
           container.innerHTML += ele
  
      return ele
       })})
console.log(prices);

search_input.addEventListener("click",function (){
    console.log(this.value);
    var searched = products.filter((data, ind)=>data.title.toLowerCase().includes(this.value))
    container.innerHTML = ""
    searched.forEach((data,ind) =>{
     var ele = createelement(
         data.title ,
         data.category, 
         data.price,
         data.description?.slice(0,  10000),
         data.image);
 
         container.innerHTML += ele

    // console.log(searched);
     })})
function createelement(title, price ,category ,description ,image) {
    var ele = `<div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="#" class="btn btn-primary">${category}  price</a>
  </div> 
  ${price} 
</div>`

          return ele
}
function renderproducts() {
    container.innerhtml = ""
   products.forEach((data,ind) =>{
    var ele = createelement(
        data.title ,
        data.category, 
        data.price,
        data.description?.slice(0,  10000),
        data.image);

        container.innerHTML += ele
   })}

renderproducts()
