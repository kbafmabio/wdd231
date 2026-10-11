const url = "data/products.json";
const productsContainer = document.querySelector("#products");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// async function

async function getProductData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProducts(data.products);
}

const displayProducts = (products) => {
    productsContainer.innerhtml = "";
    // create elements
    products.forEach(product => {
        const card = document.createElement("section");
        const title = document.createElement("h2");
        const category = document.createElement("p");
        const price = document.createElement("p");
        const photoUrl = document.createElement("img");

        // Build the h2 content out to show the products
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

    gridButton.addEventListener("click", () => {
        productsContainer.classList.add("grid");
        productsContainer.classList.remove("list");
        gridButton.classList.add("active");
        listButton.classList.remove("active");
    });

    listButton.addEventListener('click', () => {
        productsContainer.classList.add("list");
        productsContainer.classList.remove("grid");
        listButton.classList.add("active");
        gridButton.classList.remove("active");
    });

}
getProductData();


