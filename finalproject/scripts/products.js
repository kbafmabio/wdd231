const url = "data/products.json";
const productsContainer = document.querySelector("#products");

async function getProductData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProducts(data.products);
}

const displayProducts = (products) => {
    productsContainer.innerhtml = "";

    products.forEach(product => {
        const card = document.createElement("section");
        const title = document.createElement("h2");
        const category = document.createElement("p");
        const price = document.createElement("p");
        const photoUrl = document.createElement("img");

        title.textContent = product.title;
        category.textContent = product.category;
        price.textContent = `${product.price} FCFA/kg`;

        photoUrl.setAttribute("src", `images/${product.photoUrl}`);
        photoUrl.setAttribute("alt", `photo of ${product.title}`);
        photoUrl.setAttribute("loading", "lazy");
        photoUrl.setAttribute("width", "300");
        photoUrl.setAttribute("height", "200");
        photoUrl.setAttribute("format", "webp");

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(price);
        card.appendChild(photoUrl);

        productsContainer.appendChild(card);

    });

}
getProductData();


