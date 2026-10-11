const url = "data/products.json";
const productsContainer = document.querySelector("#products");

const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");

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

    function setView(view) {
        const isGrid = view === "grid";

        productsContainer.classList.toggle("product-grid", isGrid);
        productsContainer.classList.toggle("product-list", !isGrid);

        gridButton.setAttribute("aria-pressed", String(isGrid));
        listButton.setAttribute("aria-pressed", String(!isGrid));
    }

    gridButton.addEventListener("click", () => setView("grid"));
    listButton.addEventListener("click", () => setView("list"));


}
getProductData();
setView("grid");


