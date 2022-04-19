const product=()=>{
    let title,price;
    title=document.getElementById("title").innerHTML;
    price=document.getElementById("price").innerHTML;
    const cart_records=[{
        "title":title,
        "price":price
    }]
    localStorage.setItem("products", JSON.stringify(cart_records));
    location.href="cart.html";
}

