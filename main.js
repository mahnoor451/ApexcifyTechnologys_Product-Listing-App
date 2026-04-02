// Image Sliding
let imageContainerEl = document.querySelector(".image-container");
let imagesEl = document.querySelector(".images");
let images = document.querySelectorAll(".images img");
let angleLeftEl = document.querySelector(".prev");
let angleRightEl = document.querySelector(".next");
let signInAccountEl = document.querySelector(".sign_in_account");
let bodyEl = document.querySelector("body");
let modalEl = document.querySelector(".sign-in-modal");

let currentImg = 0;
let timeout;

angleLeftEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateSlider();
});

angleRightEl.addEventListener("click", () => {
 currentImg++;
 clearTimeout(timeout);
 updateSlider();
});

updateSlider();

function updateSlider() {
      if (currentImg >= images.length) {
      currentImg = 0;
    } else if (currentImg < 0) {
      currentImg = images.length - 1;
    }

  imagesEl.style.transform =
    `translateX(-${currentImg * 100}%)`;
timeout = setTimeout(() => {
  currentImg++;
  updateSlider();
}, 5000);
}


// Product Listing
let products = [
  // Shoes Category
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "shoes",
    price: 18999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format",
    brand: "Nike",
    rating: 4.5
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    category: "shoes",
    price: 21999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format",
    brand: "Adidas",
    rating: 4.7
  },
  {
    id: 3,
    name: "Puma RS-X",
    category: "shoes",
    price: 12999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format",
    brand: "Puma",
    rating: 4.3
  },
  {
    id: 4,
    name: "New Balance 574",
    category: "electronics",
    price: 10999,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format",
    brand: "New Balance",
    rating: 4.4
  },
  {
    id: 5,
    name: "Converse Chuck Taylor",
    category: "shoes",
    price: 7999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format",
    brand: "Converse",
    rating: 4.6
  },
  {
    id: 6,
    name: "Vans Old Skool",
    category: "shoes",
    price: 6999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format",
    brand: "Vans",
    rating: 4.5
  },
  
  // Clothes Category
  {
    id: 7,
    name: "Premium Cotton T-Shirt",
    category: "clothes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    brand: "Urban Classics",
    rating: 4.2
  },
  {
    id: 8,
    name: "Slim Fit Denim Jeans",
    category: "clothes",
    price: 3999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format",
    brand: "Levi's",
    rating: 4.4
  },
  {
    id: 9,
    name: "Hoodie Sweatshirt",
    category: "clothes",
    price: 4499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format",
    brand: "Nike",
    rating: 4.6
  },
  {
    id: 10,
    name: "Summer Floral Dress",
    category: "clothes",
    price: 5299,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format",
    brand: "Zara",
    rating: 4.7
  },
  {
    id: 11,
    name: "Leather Jacket",
    category: "clothes",
    price: 12999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format",
    brand: "Jack & Jones",
    rating: 4.8
  },
  {
    id: 12,
    name: "Polo Shirt",
    category: "clothes",
    price: 2999,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?w=500&auto=format",
    brand: "Lacoste",
    rating: 4.3
  },
  {
    id: 13,
    name: "Winter Puffer Jacket",
    category: "clothes",
    price: 8999,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format",
    brand: "The North Face",
    rating: 4.7
  },
  {
    id: 14,
    name: "Sports Leggings",
    category: "clothes",
    price: 3499,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format",
    brand: "Nike",
    rating: 4.5
  },
  
  // Electronics Category
  {
    id: 15,
    name: "Sony WH-1000XM5 Headphones",
    category: "electronics",
    price: 54999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
    brand: "Sony",
    rating: 4.9
  },
  {
    id: 16,
    name: "Apple AirPods Pro",
    category: "electronics",
    price: 45999,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?w=500&auto=format",
    brand: "Apple",
    rating: 4.8
  },
  {
    id: 17,
    name: "Samsung Galaxy Watch 5",
    category: "electronics",
    price: 38999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
    brand: "Samsung",
    rating: 4.6
  },
  {
    id: 18,
    name: "JBL Flip 6 Speaker",
    category: "electronics",
    price: 18999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format",
    brand: "JBL",
    rating: 4.5
  },
  {
    id: 19,
    name: "Apple Watch Series 8",
    category: "electronics",
    price: 79999,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format",
    brand: "Apple",
    rating: 4.9
  },
  {
    id: 20,
    name: "Logitech MX Master 3S",
    category: "electronics",
    price: 15999,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format",
    brand: "Logitech",
    rating: 4.7
  },
  {
    id: 21,
    name: "Canon EOS R50 Camera",
    category: "electronics",
    price: 129999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format",
    brand: "Canon",
    rating: 4.8
  },
  {
    id: 22,
    name: "Dell XPS 15 Laptop",
    category: "electronics",
    price: 249999,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format",
    brand: "Dell",
    rating: 4.8
  },
  {
    id: 23,
    name: "iPad Pro 12.9 inch",
    category: "electronics",
    price: 189999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format",
    brand: "Apple",
    rating: 4.9
  },
  {
    id: 24,
    name: "Anker Power Bank",
    category: "electronics",
    price: 5999,
    image: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?w=500&auto=format",
    brand: "Anker",
    rating: 4.4
  },
  
  // More Shoes
  {
    id: 25,
    name: "Jordan 1 Mid",
    category: "shoes",
    price: 27999,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=500&auto=format",
    brand: "Jordan",
    rating: 4.7
  },
  {
    id: 26,
    name: "Asics Gel-Kayano 29",
    category: "shoes",
    price: 16999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format",
    brand: "Asics",
    rating: 4.6
  },
  
  // More Clothes
  {
    id: 27,
    name: "Cashmere Sweater",
    category: "clothes",
    price: 8999,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
    brand: "Uniqlo",
    rating: 4.6
  },
  {
    id: 28,
    name: "Formal Blazer",
    category: "clothes",
    price: 15999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format",
    brand: "Hugo Boss",
    rating: 4.8
  },
  {
    id: 29,
    name: "Cargo Pants",
    category: "clothes",
    price: 3999,
    image: "https://images.pexels.com/photos/7679864/pexels-photo-7679864.jpeg?w=500&auto=format",
    brand: "Carhartt",
    rating: 4.4
  },
  
  // More Electronics
  {
    id: 30,
    name: "PlayStation 5",
    category: "electronics",
    price: 129999,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format",
    brand: "Sony",
    rating: 4.9
  },
  {
    id: 31,
    name: "Xbox Series X",
    category: "electronics",
    price: 119999,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&auto=format",
    brand: "Microsoft",
    rating: 4.8
  },
  {
    id: 32,
    name: "DJI Mini 3 Pro Drone",
    category: "electronics",
    price: 89999,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&auto=format",
    brand: "DJI",
    rating: 4.7
  }
];

let activeCategory = "all";

function displayProducts(items) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 50px;">No products found 🔍</div>';
    return;
  }

  items.forEach((product) => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="brand">${product.brand || ''}</p>
        <p class="price">₨ ${product.price.toLocaleString()}</p>
        ${product.rating ? `<p class="rating">⭐ ${product.rating}/5</p>` : ''}
        <button class="cart-button" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts(category) {
  activeCategory = category; // Store selected category
  
  if (category === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter((p) => p.category === category);
    displayProducts(filtered);
  }
}


document.getElementById("search").addEventListener("input", function (e) {
  let value = e.target.value.toLowerCase();
  
  let filteredProducts;
  
  // First filter by active category
  if (activeCategory === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((p) => p.category === activeCategory);
  }
  
  // Then filter by search term (check both name AND brand)
  if (value !== "") {
    filteredProducts = filteredProducts.filter((p) => 
      p.name.toLowerCase().includes(value) ||
      (p.brand && p.brand.toLowerCase().includes(value))
    );
  }
  
  displayProducts(filteredProducts);
});

let cart = [];

function addToCart(id) {
  let product = products.find((p) => p.id === id);
  cart.push(product);
  alert(`✅ ${product.name} added to cart!`);

}

displayProducts(products);

signInAccountEl.addEventListener("click", () => {
  
});