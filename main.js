// https://fakestoreapi.com/products
const btn = document.getElementById("btn");
const products = document.getElementById("products")
console.log(products)
btn.addEventListener("click", () => {
    btn.style.display = "none"
    products.style.display = "grid"
})

//fetching the API data
let getData = () => {
    fetch(
        "https://fakestoreapi.com/products"
    ).then((response) => {
        return response.json()
    }).then((data) => {
        data.forEach(e => {
            let container = document.createElement("div");
            container.setAttribute("class", "container");
            container.setAttribute("key", e.id);
            let name = document.createElement("h1");
            name.setAttribute("class", "name");
            let details = document.createElement("div");
            details.setAttribute("class", "details");
            let image = document.createElement("p");
            let price = document.createElement("p");
            price.setAttribute("class", "price");
            let description = document.createElement("p");
            description.setAttribute("class", "description");
            name.textContent = "Name: " + e.title;
            image.innerHTML ="<img src ='" + e.image + "'/>";
            price.textContent = "Price - $" + e.price;
            description.textContent = "Description - " + e.description;
            products.appendChild(container);
            container.appendChild(name);
            container.appendChild(details);
            details.appendChild(image);
            details.appendChild(price);
            details.appendChild(description);
            console.log(e);
        });
    })
}
getData()
