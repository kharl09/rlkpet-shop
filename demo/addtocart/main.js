const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
const searchBar = document.getElementById("searchBar");

openShopping.addEventListener("click", () => {
    body.classList.add("active")
});

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
});

let products = [
    // (your product list)
    {id: 1, name: "Pedigree Puppy", images: "pedigreeP.jpg", price: 300, category: "dog-food"},
    {id: 2, name: "Pedigree Adult", images: "pedigreeA.jpg", price: 504, category: "dog-food"},
    {id: 3, name: "Smart Heart Puppy", images: "smartheartP.jpg", price: 444, category: "dog-food"},
    {id: 4, name: "Smart Heart Adult", images: "smartheartA.jpg", price: 319, category: "dog-food"},
    {id: 5, name: "Vitality Adult", images: "vitalityA.jpg", price: 210, category: "dog-food"},
    {id: 6, name: "Vitality Puppy", images: "vitalityP.jpg", price: 2945, category: "dog-food"},
    {id: 7, name: "NutriChunks Puppy", images: "nutrichuncksP.jpg", price: 329, category: "dog-food"},
    {id: 8, name: "NutriChunks Adult", images: "nutrichuncksA.jpg", price: 749, category: "dog-food"},
    {id: 9, name: "Royal Canin Puppy", images: "royalcaninP.jpg", price: 81, category: "dog-food"},
    {id: 11, name: "Royal Canin Adult", images: "royalcaninA.jpg", price: 1600, category: "dog-food"},
    {id: 12, name: "Royal Canin Cats", images: "royalcaninC.jpg", price: 1190, category: "cat-food"},
    {id: 13, name: "Whiskas (Kitten)", images: "whiskasJC.jpg", price: 300, category: "cat-food"},
    {id: 14, name: "Whiskas (Adult Cat)", images: "whiskasA.jpg", price: 335, category: "cat-food"},
    {id: 15, name: "Monge (Kitten)", images: "monge.jpg", price: 209, category: "cat-food"},
    {id: 16, name: "Monge (Adult Cat)", images: "mongeC.jpg", price: 371, category: "cat-food"},
    {id: 17, name: "Sheba (Adult Cat)", images: "shebaA.jpg", price: 540, category: "cat-food"},
    {id: 18, name: "Sheba (Kitten)", images: "shebaK.jpg", price: 125, category: "cat-food"},
    {id: 19, name: "Temptations (Kitten)", images: "temptationsK.jpg", price: 130, category: "cat-food"},
    {id: 20, name: "Tempatations (Adult Cat)", images: "temptationsA.jpg", price: 135, category: "cat-food"},
    {id: 21, name: "Ciao Catfood", images: "ciao.jpg", price: 35, category: "cat-food"},
    {id: 22, name: "Cloth Bundle (Cats)", images: "catclothes.jpg", price: 120, category: "clothes"},
    {id: 23, name: "Fashion Cloth for Puppies ", images: "dogclothesP.jpg", price: 110, category: "clothes"},
    {id: 24, name: "Fashion CLoth for Adults", images: "dogclothesA.jpg", price: 115, category: "clothes"},
    {id: 25, name: "Interactive Cat Feather Wand Toy", images: "cattoy1.jpg", price: 36, category: "toys"},
    {id: 26, name: "Cat Toy Ball", images: "cattoy2.jpg", price: 13, category: "toys"},
    {id: 27, name: "Mice Cat Toy", images: "cattoy3.jpg", price: 25, category: "toys"},
    {id: 28, name: "AirDog Squeaker Dumbbell Dog Toy", images: "dogtoy1.jpg", price: 595, category: "toys"},
    {id: 29, name: "Dog and Cat Toy 1 set", images: "dogtoy2.jpg", price: 300, category: "toys"},
    {id: 30, name: "Our Dog Aloe Vera Shampoo", images: "shampoo1.jpg", price: 500, category: "shampoo"},
    {id: 31, name: "Burt's Bees Oatmeal Dog Shampoo", images: "shampoo2.jpg", price: 955, category: "shampoo"},
    {id: 32, name: "Madre De Cacao Shampoo for Dogs/Cats", images: "shampoo3.jpg", price: 125, category: "shampoo"},
    {id: 33, name: "Pet Fresh Hypoallergenic Shampoo for Dogs/Cats", images: "shampoo4.jpg", price: 295, category: "shampoo"},
    {id: 34, name: "Madre De Cacao Soap for Dogs/Cats", images: "soap1.jpg", price: 116, category: "soap"},
    {id: 35, name: "Dr.Shiba Anti Flea & Tick Spray and Soap", images: "soap2.jpg", price: 439, category: "soap"},
    {id: 36, name: "Bayopet Soap Tick and Flea for Dogs", images: "soap3.jpg", price: 109, category: "soap"},
    {id: 37, name: "Bearing All Breeds Anti-tick & Flea Soap", images: "soap4.jpg", price: 119, category: "soap"},
    {id: 38, name: "Play Pets Cologne", images: "cologne1.jpg", price: 339, category: "cologne"},
    {id: 39, name: "Doctor's Pet Medicated Dog Soap 135G", images: "cologne2.jpg", price: 125, category: "cologne"},
    {id: 40, name: "Hydra Forever Winner Cologne for Dogs/Cats", images: "cologne3.jpg", price: 4065, category: "cologne"},
    {id: 41, name: "Beaphar Toothbrush", images: "toothbrush1.jpg", price: 470, category: "toothbrush"},
    {id: 42, name: "H&H Pets Toothbrush (Cats/Dogs)", images: "toothbrush2.jpg", price: 50, category: "toothbrush"},
    {id: 43, name: "H&H Kitten Toothbrush", images: "toothbrush3.jpg", price: 30, category: "toothbrush"},
    {id: 44, name: "PetWeiler Dog Grooming Nail Cutter", images: "nailcutter1.jpg", price: 133, category: "accessories"},
    {id: 45, name: "Pet Nail Clippers for Small Animals", images: "nailcutter2.jpg", price: 280, category: "accessories"},
    {id: 46, name: "Heavy Duty Pet Hair Razor", images: "razor1.jpg", price: 579, category: "accessories"},
    {id: 47, name: "Wireless Pet Hair Razor", images: "razor2.jpg", price: 521, category: "accessories"},
    {id: 48, name: "Dog Leash Puppy", images: "leash1.jpg", price: 14, category: "accessories"},
    {id: 49, name: "Dog Leash Adult", images: "leash2.jpg", price: 28, category: "accessories"},
    {id: 50, name: "Cat Leash", images: "leash3.jpg", price: 25, category: "accessories"},
];

let listCards = [];

const initApp = () => {
    list.innerHTML = ""; // Clear list to prevent duplication
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.classList.add(value.category); // Add category class to item
        newDiv.innerHTML = `
            <img src="img/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">P${value.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
            <button onclick="addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    });
};

initApp();

const filterItems = (category) => {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block'; // Show all items
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block'; // Show only matching category
            } else {
                item.style.display = 'none';  // Hide non-matching category
            }
        }
    });
};

// Initialize with all items shown
filterItems('all');


const addToCard = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
};

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {

        if (value && value.quantity >  0) {
            totalPrice += value.price;  // Only add the price if the item is valid
            count += value.quantity;    // Only count valid items

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="img/${value.images}"></div>
                <div class="cardTitle">${value.name}<div>
                <div class="cardPrice">P${value.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                <div>
                    <button class="cardButton" style="background-color: #560bad" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="cardButton" style="background-color: #560bad" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }

        /* total.innerText = totalPrice.toLocaleString(); */
        total.innerText = `P${totalPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

        quantity.innerText = count;

        // If no items are in the cart, reset total to 0
        if (count === 0) {
        total.innerText = "0";
        }
    });

         
    // Store cart and totalPrice in localStorage when "Total" is clicked
    total.addEventListener("click", () => {
        // Store the cart items and total price in localStorage
        localStorage.setItem("cartItems", JSON.stringify(listCards));
        localStorage.setItem("totalPrice", totalPrice);

        // Redirect to the checkout page
        window.location.href = "/demo/addtocart/payment/checkout.html"; // Replace with your checkout page path
    });
};

const changeQuantity = (key, quantity) => {
    if (quantity <= 0) {
        // Set the item in listCards to null to remove it
        listCards[key] = null;
    } else {
        // Update the item quantity and price
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
};

// Add search functionality (unchanged)
searchBar.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filterProducts(searchTerm);
});

// Filter products based on the search term (unchanged)
const filterProducts = (searchTerm) => {
    list.innerHTML = ""; // Clear the current product list
    products
        .filter(product => product.name.toLowerCase().includes(searchTerm)) // Filter products by name
        .forEach((value, key) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("item");
            newDiv.classList.add(value.category); // Add category class to item
            newDiv.innerHTML = `
                <img src="img/${value.images}">
                <div class="title">${value.name}</div>
                <div class="price">P${value.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                <button onclick="addToCard(${key})">Add to Cart</button>
            `;
            list.appendChild(newDiv);
        });
};
