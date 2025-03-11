document.addEventListener("DOMContentLoaded", ()=>{
    const products = [
        {name: "1 Litre", image:"1L-1.jpg",},
        {name: "500 ML", image:"500ML-1.jpg",},
       
    ];

    const productList = document.getElementById("product-list");

    function displayProducts(filter = "")
    {
        productList.innerHTML = "";
        products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())).forEach(product =>{
            productList.innerHTML += `<div class="product">
                <img src="${product.image}" alt="${product.name}"></img>
                <h3>"${product.name}"</h3>
                
                
            </div>
            `;
        });
    }
    document.getElementById("search-bar").addEventListener("input", (e) =>{
        displayProducts(e.target.value);
    });
    
    displayProducts();
});
