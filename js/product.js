const product=()=>{
    let title,price;
    title=document.getElementById("title").innerHTML;
    price=document.getElementById("price").innerHTML;
    let cart_records = [];
    cart_records=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[]
    cart_records.push({
             "title":title,
             "price":price
         });
    localStorage.setItem("products", JSON.stringify(cart_records));
    location.href="cart.html";
}

