const product_total_amount=document.getElementById("total_amount");
//decrement counter
const decreament = () => {
    var itemval = document.getElementById("textbox");
    var itemprice = document.getElementById("itemprice");
    console.log(itemprice)
    if (itemval.value <= 0) {
        itemval.value = 0;

    }
    else {
    let products=localStorage.getItem("products");
    const parsearr=JSON.parse(products)
    parsearr.map((i)=>{
    document.getElementById("titleget").innerHTML =i.title;
    document.getElementById("itemprice").innerHTML=i.price;
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = "#fff";
        itemval.style.color = '#000';
        let item=itemval.value;
        let price=i.price;
        let decrement=item*price;
        itemprice.innerHTML =decrement; 
        product_total_amount.innerHTML=decrement;

    })
    }
}

//Increment counter
const increament = () => {
    var itemval = document.getElementById("textbox");
    var itemprice = document.getElementById("itemprice");
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert("max 5 allowed");
        itemval.style.background = "red";
        itemval.style.color = '#fff';
    }
    else {
let products=localStorage.getItem("products");
const parsearr=JSON.parse(products)
parsearr.map((i)=>{
    document.getElementById("titleget").innerHTML =i.title;
   document.getElementById("itemprice").innerHTML=i.price;
itemval.value = parseInt(itemval.value) + 1;
console.log(itemval.value,"quantity")
   itemprice.innerHTML = itemval.value * i.price;
   product_total_amount.innerHTML=itemval.value * i.price;
})

    }
    
}

// local storage delete
const delete_product=(itemIndex)=>{
    let products=localStorage.getItem("products");
    let parsearr=JSON.parse(products);
    parsearr.splice(itemIndex,1);
    localStorage.setItem('products',JSON.stringify(parsearr));
}

// local storage Add
let products=localStorage.getItem("products");
const parsearr=JSON.parse(products);
parsearr.map((i)=>{
    let cart=document.getElementById("titleget");
    let li=document.createElement('li');
    let text=document.createTextNode(i.title);
     li.appendChild(text);
    cart.appendChild(li);
})




